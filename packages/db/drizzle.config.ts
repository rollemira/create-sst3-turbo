import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({
  path: "../../.env",
});

const dbUrl = process.env.DATABASE_URL;
const dbToken = process.env.DATABASE_AUTH_TOKEN;
if (!dbUrl) throw new Error("DATABASE_URL is not set");
if (!dbToken) throw new Error("DATABASE_AUTH_TOKEN is not set");
//console.log("Using DB URL: ", dbUrl);

export default {
  schema: "./schema.ts",
  out: "./migrations",
  driver: "turso",
  dbCredentials: {
    url: dbUrl,
    authToken: dbToken,
  },
  tablesFilter: ["acme_*"],
} satisfies Config;
