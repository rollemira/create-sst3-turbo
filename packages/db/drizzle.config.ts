import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({
  path: "../../.env",
});

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) throw new Error("DATABASE_URL is not set");
//console.log("Using DB URL: ", dbUrl);

export default {
  schema: "./schema.ts",
  out: "./migrations",
  driver: "mysql2",
  dbCredentials: {
    connectionString: dbUrl,
  },
  tablesFilter: ["acme_*"],
} satisfies Config;
