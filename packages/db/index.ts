import { RDSDataClient } from "@aws-sdk/client-rds-data";
import { fromIni } from "@aws-sdk/credential-providers";
import { drizzle } from "drizzle-orm/aws-data-api/pg";
import { migrate as mig } from "drizzle-orm/aws-data-api/pg/migrator";
import { RDS } from "sst/node/rds";

import * as schema from "./schema";

export * from "./schema";

export * from "drizzle-orm";

const rdsClient = new RDSDataClient({
  credentials: fromIni({ profile: process.env.AWS_PROFILE }),
  region: "us-east-1",
});

export const db = drizzle(rdsClient, {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  database: RDS.Database.defaultDatabaseName,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  secretArn: RDS.Database.secretArn,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  resourceArn: RDS.Database.clusterArn,
  schema,
});

export const migrate = (path: string) => {
  return mig(db, { migrationsFolder: path });
};
