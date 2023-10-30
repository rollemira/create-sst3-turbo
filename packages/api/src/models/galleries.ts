// you can do a lot of cool stuff here, check this out for more info:
// https://orm.drizzle.team/docs/zod
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";

import { galleries } from "@acme/db/schema";

const createSchema = createInsertSchema(galleries);
export const createGallerySchema = createSchema.omit({
  id: true,
});

export const selectGallerySchema = createSelectSchema(galleries);

export type GalleryType = z.infer<typeof selectGallerySchema>;
