import { z } from "zod";

export const pagedRequestSchema = z.object({
  offset: z.number().default(0),
  limit: z.number().default(10),
  orderBy: z.string().optional(),
});
