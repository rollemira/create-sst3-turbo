import { NextjsSite, StackContext, StaticSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function WebSiteStack({ stack }: StackContext) {
  const { stageUrl: apiUrl } = use(ApiStack);

  // Define our React app
  const viteDomain = `${
    stack.stage === "prod" ? "vite" : `${stack.stage}-vite`
  }.rollemtech.app`;
  const viteCustomDomain = {
    domainName: viteDomain,
    hostedZone: "rollemtech.app",
  };
  const viteSite = new StaticSite(stack, "WebSite", {
    customDomain: ["test", "prod"].includes(stack.stage)
      ? viteCustomDomain
      : undefined,
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
  }.rollemtech.app`;
  const nextCustomDomain = {
    domainName: viteDomain,
    hostedZone: "rollemtech.app",
  };
  const nextSite = new NextjsSite(stack, "NextWebsite", {
    customDomain: ["test", "prod"].includes(stack.stage)
      ? nextCustomDomain
      : undefined,
    path: "apps/nextjs",
    // Pass in our environment variables
    environment: {
      NEXT_PUBLIC_API_URL: apiUrl,
    },
  });

  // Show the url in the output
  const viteStageUrl = `https://${viteDomain}`;
  const nextStageUrl = `https://${nextDomain}`;
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
