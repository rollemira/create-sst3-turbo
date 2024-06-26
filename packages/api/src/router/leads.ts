import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { desc, eq } from "@acme/db";
import { leads } from "@acme/db/schema";

import { pagedInput } from "../common/inputs";
import { createdOutput } from "../common/outputs";
import { createLeadSchema, selectLeadSchema } from "../models";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const leadsRouter = createTRPCRouter({
  all: publicProcedure.input(pagedInput).query(({ input, ctx }) => {
    const { page, limit } = input;
    return {
      page: page,
      limit: limit,
      data: ctx.db.query.leads.findMany({
        offset: (page - 1) * limit,
        limit: limit,
        orderBy: desc(leads.createdAt),
      }),
    };
  }),
  byId: publicProcedure
    .input(z.object({ id: z.number() }))
    // validate stuff going out the door!
    .output(selectLeadSchema)
    .query(async ({ input, ctx }) => {
      const lead = await ctx.db.query.leads.findFirst({
        where: eq(leads.id, input.id),
      });
      if (!lead) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Not Found" });
      }
      return lead;
    }),
  create: publicProcedure
    .input(createLeadSchema)
    // we can validate output too!!!
    // don't let passwords leak out please
    //.output(selectLeadSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.insert(leads).values(input);
      return createdOutput;
    }),
});
