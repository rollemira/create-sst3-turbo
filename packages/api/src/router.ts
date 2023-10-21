import { greetRouter } from "./router/greet";
import { leadsRouter } from "./router/leads";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  greet: greetRouter,
  leads: leadsRouter,
});

export type AppRouter = typeof appRouter;
