/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RDSDataClient } from "@aws-sdk/client-rds-data";
import { drizzle } from "drizzle-orm-pg/aws-datapi";
import { migrate as mig } from "drizzle-orm-pg/aws-datapi/migrator";
import { RDS } from "sst/node/rds";

export const db = drizzle(new RDSDataClient({}), {
  database: RDS.rds.defaultDatabaseName,
  secretArn: RDS.rds.secretArn,
  resourceArn: RDS.rds.clusterArn,
});

export const migrate = (path: string) => {
  return mig(db, { migrationsFolder: path });
};
