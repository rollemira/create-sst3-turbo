import { NextjsSite, StackContext, StaticSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function WebSiteStack({ stack }: StackContext) {
  const { stageUrl: apiUrl } = use(ApiStack);
  const deployed = ["test", "prod"].includes(stack.stage);

  // Define our React app
  const viteDomain = `${
    stack.stage === "prod" ? "vite" : `${stack.stage}-vite`
  }.acme.com`;
  const viteCustomDomain = {
    domainName: viteDomain,
    hostedZone: "acme.com",
  };
  const viteSite = new StaticSite(stack, "WebSite", {
    customDomain: deployed ? viteCustomDomain : undefined,
    path: "apps/web",
    buildCommand: "pnpm run build",
    buildOutput: "dist",
    // Pass in our environment variables
    environment: {
      VITE_API_URL: apiUrl,
    },
  });

  const nextDomain = `${
    stack.stage === "prod" ? "next" : `${stack.stage}-next`
  }.acme.com`;
  const nextCustomDomain = {
    domainName: nextDomain,
    hostedZone: "acme.com",
  };
  const nextSite = new NextjsSite(stack, "NextWebsite", {
    customDomain: deployed ? nextCustomDomain : undefined,
    path: "apps/nextjs",
    // Pass in our environment variables
    environment: {
      NEXT_PUBLIC_API_URL: apiUrl,
    },
  });

  // Show the url in the output
  const viteStageUrl = deployed ? `https://${viteDomain}` : viteSite.url;
  const nextStageUrl = deployed ? `https://${nextDomain}` : nextSite.url;
  stack.addOutputs({
    ViteHost: viteSite.url,
    ViteStageUrl: viteStageUrl,
    NextHost: nextSite.url,
    NextStageurl: nextStageUrl,
  });

  return {
    nextSite: nextSite,
    nextStageUrl,
    viteSite: viteSite,
    viteStageUrl,
  };
}
