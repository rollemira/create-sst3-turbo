/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RDSDataClient } from "@aws-sdk/client-rds-data";
import { fromIni } from "@aws-sdk/credential-providers";
import { drizzle } from "drizzle-orm/aws-data-api/pg";

import "@aws-sdk/client-rds-data/dist-types/";

//import { migrate as mig } from "drizzle-orm-pg/aws-datapi/migrator";
import { RDS } from "sst/node/rds";

const rdsClient = new RDSDataClient({
  credentials: fromIni({ profile: process.env.AWS_PROFILE }),
  region: "us-east-1",
});

export const db = drizzle(rdsClient, {
  database: RDS.Database.defaultDatabaseName,
  secretArn: RDS.Database.secretArn,
  resourceArn: RDS.Database.clusterArn,
});

// export const migrate = (path: string) => {
//   return mig(db, { migrationsFolder: path });
// };
