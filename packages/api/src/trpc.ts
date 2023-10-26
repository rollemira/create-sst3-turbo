import { initTRPC, TRPCError } from "@trpc/server";
import type { APIGatewayProxyEvent } from "aws-lambda";
import superjson from "superjson";
import { ZodError } from "zod";

import { db } from "@acme/db";

export interface Session {
  user: string;
}

interface CreateContextOptions {
  event?: APIGatewayProxyEvent;
  apiVersion?: string;
  user?: string;
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    ...opts,
    db: db(),
  };
};

export const createTRPCContext = async (opts: {
  req?: Request;
  ctx?: CreateContextOptions;
  // eslint-disable-next-line @typescript-eslint/require-await
}) => {
  const source = opts.req?.headers.get("x-trpc-source") ?? "unknown";

  console.log(">>> tRPC Request from", source, "by", opts.ctx?.user);

  return createInnerTRPCContext({
    ...opts.ctx,
  });
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx,
  });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
