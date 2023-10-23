import { NextjsSite, StackContext, StaticSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function WebSiteStack({ stack }: StackContext) {
  const { api } = use(ApiStack);

  // Define our React app
  const viteSite = new StaticSite(stack, "WebSite", {
    path: "apps/web",
    buildCommand: "pnpm run build",
    buildOutput: "dist",
    // Pass in our environment variables
    environment: {
      VITE_API_URL: api.url,
    },
  });

  const nextSite = new NextjsSite(stack, "NextWebsite", {
    path: "apps/nextjs",
    // Pass in our environment variables
    environment: {
      NEXT_PUBLIC_API_URL: api.url,
    },
  });


  // Show the url in the output
  stack.addOutputs({
    viteSiteUrl: viteSite.url,
    nextSiteUrl: nextSite.url,
  });

  return {
    viteSite: viteSite,
    nextSite: nextSite,
  };
}
