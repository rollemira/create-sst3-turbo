import { StackContext, Api } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    // defaults: {
    //   function: {
    //     bind: ["db"],
    //     // HACK: copy the migrations to known folder in root
    //     copyFiles: [
    //       {
    //         from: "/packages/db/migrations/",
    //         to: "migrations",
    //       },
    //     ],
    //   },
    // },
    cors: true,
    routes: {
      "GET /health": "packages/backend/src/health.handler",
      "OPTIONS /trpc/{proxy+}": "packages/backend/src/options.handler",
      "GET /trpc/{proxy+}": "packages/backend/src/server.handler",
      "POST /trpc/{proxy+}": "packages/backend/src/server.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}
