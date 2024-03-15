import type { Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "libsql-stateless-easy";

import * as schema from "./schema";

export * from "drizzle-orm";

let client: Client;

export const db = (credentials?: { url: string; authToken: string }) => {
  client = client
    ? client
    : credentials
      ? createClient(credentials)
      : createClient({
          url: process.env.DATABASE_URL ?? "https://example.com",
          authToken: process.env.DATABASE_AUTH_TOKEN ?? "invalid_token",
        });
  return drizzle(client, { schema });
};
