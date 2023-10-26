import { leadsRouter } from "./router/leads";
import { pingRouter } from "./router/ping";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  pinger: pingRouter,
  leads: leadsRouter,
});

export type AppRouter = typeof appRouter;
