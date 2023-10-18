import { greetRouter } from "./router/greet";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  greet: greetRouter,
});

export type AppRouter = typeof appRouter;
