import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { desc, eq, leads, sql } from "@acme/db";

import { pagedInput } from "../common/inputs";
import { createdOutput } from "../common/outputs";
import { insertLeadSchema, selectLeadSchema } from "../models";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const leadsRouter = createTRPCRouter({
  all: publicProcedure.input(pagedInput).query(({ input, ctx }) => {
    const { page, limit, orderBy } = input;
    return {
      page: page,
      limit: limit,
      orderBy: orderBy,
      data: ctx.db.query.leads.findMany({
        offset: (page - 1) * limit,
        limit: limit,
        orderBy: desc(sql`${orderBy ?? "id"}`),
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
    .input(insertLeadSchema)
    // we can validate output too!!!
    // don't let passwords leak out please
    //.output(selectLeadSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.insert(leads).values(input);
      return createdOutput;
    }),
});
