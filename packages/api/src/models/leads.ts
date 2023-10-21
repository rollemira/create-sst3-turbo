// you can do a lot of cool stuff here, check this out for more info:
// https://orm.drizzle.team/docs/zod
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";

import { leads } from "@acme/db";

export const insertLeadSchema = createInsertSchema(leads);

export const selectLeadSchema = createSelectSchema(leads);

export type LeadType = z.infer<typeof selectLeadSchema>;
