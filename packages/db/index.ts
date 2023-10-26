import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as schema from "./schema";

export * from "drizzle-orm";

let client: Client;

export const db = (connectionString?: string) => {
  if (!client && connectionString) {
    client = new Client({
      url: connectionString,
    });
  } else {
    // try the env
    if (!client) {
      client = new Client({
        url: process.env.DATABASE_URL,
      });
    }
  }
  return drizzle(client.connection(), { schema });
};
