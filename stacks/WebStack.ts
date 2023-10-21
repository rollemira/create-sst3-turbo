import { StackContext, StaticSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function WebSiteStack({ stack }: StackContext) {
  const { api } = use(ApiStack);

  // Define our React app
  const site = new StaticSite(stack, "WebSite", {
    path: "apps/web",
    buildCommand: "pnpm run build",
    buildOutput: "dist",
    // Pass in our environment variables
    environment: {
      VITE_BACKEND_URL: api.url,
    },
  });

  // Show the url in the output
  stack.addOutputs({
    WebSiteUrl: site.url,
  });

  return {
    site,
  };
}
