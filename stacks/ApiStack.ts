import { StackContext, Api, Config } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {
  const DATABASE_URL = new Config.Secret(stack, "DATABASE_URL");
  const deployed = ["test", "prod"].includes(stack.stage);

  const domainName = `${
    stack.stage === "prod" ? "acme-api" : `acmeapi-${stack.stage}`
  }.rollemtech.app`;
  const customDomain = {
    domainName,
    hostedZone: "rollemtech.app",
  };
  const api = new Api(stack, "api", {
    customDomain: deployed ? customDomain : undefined,
    defaults: {
      function: {
        bind: [DATABASE_URL],
      },
    },
    cors: {
      allowHeaders: ["*"],
      allowOrigins: deployed
        ? [
            `https://${
              stack.stage === "prod" ? "vite" : `${stack.stage}-vite`
            }.rollemtech.app`,
            `https://${
              stack.stage === "prod" ? "next" : `${stack.stage}-next`
            }.rollemtech.app`,
          ]
        : ["*"], // allow all origins in dev
      allowMethods: ["GET", "POST", "OPTIONS"],
    },
    routes: {
      "GET /health": "functions/backend/src/health.handler",
      "OPTIONS /trpc/{proxy+}": "functions/backend/src/options.handler",
      "GET /trpc/{proxy+}": "functions/backend/src/server.handler",
      "POST /trpc/{proxy+}": "functions/backend/src/server.handler",
    },
  });

  const stageUrl = deployed ? `https://${domainName}` : api.url;
  stack.addOutputs({
    ApiHost: api.url,
    StageUrl: stageUrl,
  });

  return {
    api,
    stageUrl: stageUrl,
  };
}
