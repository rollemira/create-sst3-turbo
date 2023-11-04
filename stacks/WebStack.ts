import { NextjsSite, StackContext, StaticSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function WebSiteStack({ stack }: StackContext) {
  const { stageUrl: apiUrl } = use(ApiStack);
  const deployed = ["test", "prod"].includes(stack.stage);

  const nextDomain = `${
    stack.stage === "prod" ? "gallery" : `${stack.stage}-gallery`
  }.rollemtech.app`;
  const nextCustomDomain = {
    domainName: nextDomain,
    hostedZone: "rollemtech.app",
  };
  const nextSite = new NextjsSite(stack, "NextWebsite", {
    customDomain: deployed ? nextCustomDomain : undefined,
    path: "apps/gallery",
    runtime: "nodejs18.x",
    // Pass in our environment variables
    environment: {
      CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY!,
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
      NEXT_PUBLIC_API_URL: apiUrl,
    },
  });

  // Show the url in the output
  const nextStageUrl = deployed ? `https://${nextDomain}` : nextSite.url;
  stack.addOutputs({
    NextHost: nextSite.url,
    NextStageurl: nextStageUrl,
  });

  return {
    nextSite: nextSite,
    nextStageUrl,
  };
}
