import { NextjsSite, StackContext, StaticSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function WebSiteStack({ stack }: StackContext) {
  const { api, stageUrl: apiUrl } = use(ApiStack);

  // Define our React app
  const viteSite = new StaticSite(stack, "WebSite", {
    customDomain: {
      domainName: `${
        stack.stage === "prod" ? "vite" : `${stack.stage}-vite`
      }.rollemtech.app`,
      hostedZone: "rollemtech.app",
    },
    path: "apps/web",
    buildCommand: "pnpm run build",
    buildOutput: "dist",
    // Pass in our environment variables
    environment: {
      VITE_API_URL: apiUrl,
    },
  });

  const nextSite = new NextjsSite(stack, "NextWebsite", {
    customDomain: {
      domainName: `${
        stack.stage === "prod" ? "next" : `${stack.stage}-next`
      }.rollemtech.app`,
      hostedZone: "rollemtech.app",
    },
    path: "apps/nextjs",
    // Pass in our environment variables
    environment: {
      NEXT_PUBLIC_API_URL: apiUrl,
    },
  });

  // Show the url in the output
  stack.addOutputs({
    viteSiteUrl: viteSite.url,
    viteFriendlyUrl: `https://${
      stack.stage === "prod" ? "vite" : `${stack.stage}-vite`
    }.rollemtech.app`,
    nextSiteUrl: nextSite.url,
    nextFriendlyUrl: `https://${
      stack.stage === "prod" ? "next" : `${stack.stage}-next`
    }.rollemtech.app`,
  });

  return {
    viteSite: viteSite,
    nextSite: nextSite,
  };
}
