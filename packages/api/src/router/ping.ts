import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const pingRouter = createTRPCRouter({
  ping: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { reply: `Pong! ${input.name}` }; //. x-user?: ${ctx.user}.`;
    }),
  pingSecure: protectedProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { reply: `Pong Secure! ${input.name}` }; //. x-user?: ${ctx.user}.`;
    }),
});
