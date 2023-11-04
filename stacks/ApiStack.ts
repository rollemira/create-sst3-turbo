import { StackContext, Api, Config } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {
  const DATABASE_URL = new Config.Secret(stack, "DATABASE_URL");
  const deployed = ["test", "prod"].includes(stack.stage);

  const domainName = `${
    stack.stage === "prod" ? "api" : `${stack.stage}-api`
  }.rollemtech.app`;
  const customDomain = {
    domainName,
    hostedZone: "rollemtech.app",
  };
  const api = new Api(stack, "api", {
    authorizers: {
      clerk: {
        type: "jwt",
        jwt: {
          audience: ["https://api.rollemtech.app"], // <-- your custom aud claim
          issuer: process.env.CLERK_ISSUER!, // <-- your clerk issuer value
        },
      },
    },
    customDomain: deployed ? customDomain : undefined,
    defaults: {
      authorizer: "clerk",
      function: {
        bind: [DATABASE_URL],
        runtime: "nodejs18.x",
      },
    },
    cors: {
      allowHeaders: ["*"],
      allowOrigins: deployed
        ? [
            `https://${
              stack.stage === "prod" ? "gallery" : `${stack.stage}-gallery`
            }.rollemtech.app`,
          ]
        : ["http://localhost:3000"], // allow all origins in dev
      allowMethods: ["GET", "POST", "OPTIONS"],
    },
    routes: {
      "GET /health": {
        function: "functions/backend/src/health.handler",
        authorizer: "none",
      },
      "OPTIONS /public/trpc/{proxy+}": {
        function: "functions/backend/src/options.handler",
        authorizer: "none",
      },
      "GET /public/trpc/{proxy+}": {
        function: "functions/backend/src/server.handler",
        authorizer: "none",
      },
      "POST /public/trpc/{proxy+}": {
        function: "functions/backend/src/server.handler",
        authorizer: "none",
      },
      "OPTIONS /trpc/{proxy+}": {
        function: "functions/backend/src/options.handler",
        authorizer: "none",
      },
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
