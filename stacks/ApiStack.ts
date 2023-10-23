import { StackContext, Api } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    cors: {
      allowHeaders: ["*"],
      allowOrigins: ["*"],
      allowMethods: ["GET", "POST", "OPTIONS"],
    },
    routes: {
      "GET /health": "functions/backend/src/health.handler",
      "OPTIONS /trpc/{proxy+}": "functions/backend/src/options.handler",
      "GET /trpc/{proxy+}": "functions/backend/src/server.handler",
      "POST /trpc/{proxy+}": "functions/backend/src/server.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    api,
  };
}
