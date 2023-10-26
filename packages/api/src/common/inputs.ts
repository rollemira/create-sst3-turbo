import { z } from "zod";

export const pagedInput = z.object({
  page: z.number().positive().int().optional().default(1),
  limit: z.number().positive().int().optional().default(10),
  orderBy: z.string().optional(),
});
