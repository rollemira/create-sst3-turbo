import { sql } from "drizzle-orm";
import {
  float,
  mysqlTable,
  primaryKey,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const leads = mysqlTable(
  "leads",
  {
    id: serial("id").notNull(),
    firstName: varchar("firstName", { length: 256 }),
    lastName: varchar("lastName", { length: 256 }),
    email: varchar("email", { length: 256 }),
    phone: varchar("phone", { length: 20 }),
    address1: varchar("address1", { length: 256 }),
    address2: varchar("address2", { length: 256 }),
    city: varchar("city", { length: 256 }),
    state: varchar("state", { length: 256 }),
    zip: varchar("zip", { length: 20 }),
    county: varchar("county", { length: 256 }),
    country: varchar("country", { length: 256 }),
    lat: float("lat"),
    long: float("long"),
    createdAt: timestamp("createdAt", { mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => {
    return {
      leadsId: primaryKey(table.id),
    };
  },
);