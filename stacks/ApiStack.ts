import { StackContext, Api, use } from "sst/constructs";
import { DbStack } from "./DbStack";

export function ApiStack({ stack }: StackContext) {
  const { rds } = use(DbStack);

  const api = new Api(stack, "api", {
    defaults: {
      function: {
        bind: [rds],
        copyFiles: [
          {
            from: "packages/db/migrations",
            to: "migrations",
          },
        ],
      },
    },
    routes: {
      "OPTIONS /trpc/{proxy+}": "packages/backend/src/options.handler",
      "GET /trpc/{proxy+}": "packages/backend/src/server.handler",
      "POST /trpc/{proxy+}": "packages/backend/src/server.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    RDS_ARN: rds.clusterArn,
    RDS_SECRET: rds.secretArn,
    RDS_DATABASE: rds.defaultDatabaseName,
  });

  // Return the API resource
  return {
    api,
  };
}
