import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const greetRouter = createTRPCRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      return { reply: `Greetings, ${input.name}` }; //. x-user?: ${ctx.user}.`;
    }),
});
