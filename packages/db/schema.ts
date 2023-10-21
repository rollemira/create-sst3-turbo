import { sql } from "drizzle-orm";
import {
  bigserial,
  numeric,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
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
  lat: numeric("lat"),
  long: numeric("long"),
  createdAt: timestamp("createdAt")
    .notNull()
    .default(sql`now()`),
});
