import { StackContext, Api } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {
  const domainName = `${
    stack.stage === "prod" ? "api" : `${stack.stage}-api`
  }.rollemtech.app`;
  const customDomain = {
    domainName,
    hostedZone: "rollemtech.app",
  };
  const api = new Api(stack, "api", {
    customDomain: ["test", "prod"].includes(stack.stage)
      ? customDomain
      : undefined,
    cors: {
      allowHeaders: ["*"],
      allowOrigins: [
        "http://localhost:5173",
        "http://localhost:3000",
        `https://${
          stack.stage === "prod" ? "vite" : `${stack.stage}-vite`
        }.rollemtech.app`,
        `https://${
          stack.stage === "prod" ? "next" : `${stack.stage}-next`
        }.rollemtech.app`,
      ],
      allowMethods: ["GET", "POST", "OPTIONS"],
    },
    routes: {
      "GET /health": "functions/backend/src/health.handler",
      "OPTIONS /trpc/{proxy+}": "functions/backend/src/options.handler",
      "GET /trpc/{proxy+}": "functions/backend/src/server.handler",
      "POST /trpc/{proxy+}": "functions/backend/src/server.handler",
    },
  });

  const apiUrl = `https://${domainName}`;
  stack.addOutputs({
    ApiEndpoint: api.url,
    StageUrl: apiUrl,
  });

  return {
    stageUrl: apiUrl,
    api,
  };
}
