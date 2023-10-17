import { StackContext, StaticSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function StorefrontStack({ stack, app }: StackContext) {
  const { api } = use(ApiStack);

  // Define our React app
  const site = new StaticSite(stack, "StorefrontSite", {
    path: "apps/storefront",
    buildCommand: "yarn build",
    buildOutput: "dist",
    // Pass in our environment variables
    environment: {
      VITE_BACKEND_URL: api.url,
    },
  });

  // Show the url in the output
  stack.addOutputs({
    StorefrontSiteUrl: site.url,
  });

  return {
    site,
  };
}
