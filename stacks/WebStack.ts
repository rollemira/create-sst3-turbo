import { StackContext, StaticSite, use } from "sst/constructs";
import { BackendStack } from "./BackendStack";

export function WebSiteStack({ stack }: StackContext) {
  const { api } = use(BackendStack);

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
