import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { desc, eq, leads } from "@acme/db";

import { createdResponse } from "../common/responses";
import { insertLeadSchema, selectLeadSchema } from "../models";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const leadsRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.leads.findMany({ orderBy: desc(leads.id) });
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
    .input(insertLeadSchema)
    // we can validate output too!!!
    // don't let passwords leak out please
    //.output(selectLeadSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.insert(leads).values(input);
      return createdResponse;
    }),
});
