import { sql } from "drizzle-orm";
import { integer, real, text } from "drizzle-orm/sqlite-core";

import { tableCreator } from "./_table";

export const leads = tableCreator("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
  firstName: text("firstName").default(sql`(NULL)`),
  lastName: text("lastName").default(sql`(NULL)`),
  email: text("email").default(sql`(NULL)`),
  phone: text("phone").default(sql`(NULL)`),
  address1: text("address1").default(sql`(NULL)`),
  address2: text("address2").default(sql`(NULL)`),
  city: text("city").default(sql`(NULL)`),
  state: text("state").default(sql`(NULL)`),
  zip: text("zip").default(sql`(NULL)`),
  county: text("county").default(sql`(NULL)`),
  country: text("country").default(sql`(NULL)`),
  lat: real("lat").default(sql`(NULL)`),
  long: real("long").default(sql`(NULL)`),
  createdAt: text("createdAt")
    .default(sql`(current_timestamp)`)
    .notNull(),
});
