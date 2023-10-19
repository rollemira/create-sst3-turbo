import { RDS, StackContext } from "sst/constructs";

export function DbStack({ stack, app }: StackContext) {
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

  stack.addOutputs({
    RDS_ARN: rds.clusterArn,
    RDS_SECRET: rds.secretArn,
    RDS_DATABASE: rds.defaultDatabaseName,
  });

  return { rds };
}
