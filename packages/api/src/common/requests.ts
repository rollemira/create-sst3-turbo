import { z } from "zod";

export const pagedRequestSchema = z.object({
  page: z.number().positive().int().default(1),
  limit: z.number().positive().int().default(10),
  orderBy: z.string().optional(),
});
