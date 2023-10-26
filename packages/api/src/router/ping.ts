import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const pingRouter = createTRPCRouter({
  ping: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { reply: `Pong! ${input.name}` }; //. x-user?: ${ctx.user}.`;
    }),
});
