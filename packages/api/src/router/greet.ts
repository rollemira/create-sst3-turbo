//import { TRPCError } from "@trpc/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { eq, leads } from "@acme/db";

import { createdResponse } from "../common/responses";
import { insertLeadSchema, selectLeadSchema } from "../models";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const greetRouter = createTRPCRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input, ctx }) => {
      const leads = await ctx.db.query.leads.findMany();
      console.log("leads", leads);
      return { reply: `Greetings, ${input.name}` }; //. x-user?: ${ctx.user}.`;
    }),
  createLead: publicProcedure
    .input(insertLeadSchema)
    // we can validate output too!!!
    // don't let passwords leak out please
    //.output(selectLeadSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.insert(leads).values(input);
      return createdResponse;
    }),
  getLead: publicProcedure
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
});
