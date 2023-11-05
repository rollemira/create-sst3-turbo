import { StackContext, StaticSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function WebSiteStack({ stack }: StackContext) {
  const { stageUrl: apiUrl } = use(ApiStack);
  const deployed = ["test", "prod"].includes(stack.stage);

  const domain = `${
    stack.stage === "prod" ? "gallery" : `${stack.stage}-gallery`
  }.rollemtech.app`;
  const customDomain = {
    domainName: domain,
    hostedZone: "rollemtech.app",
  };
  const site = new StaticSite(stack, "GalleryWebSite", {
    customDomain: deployed ? customDomain : undefined,
    path: "apps/gallery",
    // Pass in our environment variables
    environment: {
      VITE_CLERK_PUBLISHABLE_KEY: process.env.VITE_CLERK_PUBLISHABLE_KEY!,
      VITE_STRIPE_PUBLISHABLE_KEY: process.env.VITE_STRIPE_PUBLISHABLE_KEY!,
      VITE_API_URL: apiUrl,
    },
  });

  // Show the url in the output
  const stageUrl = deployed ? `https://${domain}` : site.url;
  stack.addOutputs({
    NextHost: site.url,
    NextStageurl: stageUrl,
  });

  return {
    site,
    stageUrl,
  };
}
