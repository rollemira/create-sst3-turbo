import { StackContext, Api, RDS } from "sst/constructs";

export function BackendStack({ stack, app }: StackContext) {
  const rds = new RDS(stack, "Database", {
    engine: "postgresql13.9",
    defaultDatabaseName: "acme",
    scaling:
      app.stage === "prod"
        ? {
            // for prod
            autoPause: false,
            minCapacity: "ACU_4",
            maxCapacity: "ACU_32",
          }
        : {
            // for dev
            autoPause: true,
            minCapacity: "ACU_2",
            maxCapacity: "ACU_2",
          },
  });

  const api = new Api(stack, "api", {
    defaults: {
      function: {
        bind: [rds],
        // HACK: copy the migrations to known folder in root
        copyFiles: [
          {
            from: "/packages/db/migrations/",
            to: "migrations",
          },
        ],
      },
    },
    routes: {
      "GET /migrate": "packages/backend/src/migrator.handler",
      "OPTIONS /trpc/{proxy+}": "packages/backend/src/options.handler",
      "GET /trpc/{proxy+}": "packages/backend/src/server.handler",
      "POST /trpc/{proxy+}": "packages/backend/src/server.handler",
    },
  });

  stack.addOutputs({
    RDS_HOST: rds.clusterEndpoint.hostname,
    RDS_ARN: rds.clusterArn,
    RDS_SECRET: rds.secretArn,
    RDS_DATABASE: rds.defaultDatabaseName,
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    rds,
    api,
  };
}
