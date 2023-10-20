import { z } from "zod";

//import { schema } from "@acme/data";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const greetRouter = createTRPCRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input, ctx }) => {
      //, ctx }) => {
      const leads = await ctx.db.query.leads.findMany();
      console.log("leads", leads);
      return { reply: `Greetings, ${input.name}` }; //. x-user?: ${ctx.user}.`;
    }),
});
