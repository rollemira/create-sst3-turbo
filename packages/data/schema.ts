/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: integer("id").primaryKey(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email"),
  phone: text("phone"),
  address1: text("address1"),
  address2: text("address2"),
  city: text("city"),
  state: text("state"),
  zip: text("zip"),
  county: text("county"),
  country: text("country"),
  //lat: numeric("lat"),
  //long: numeric("long"),
});
