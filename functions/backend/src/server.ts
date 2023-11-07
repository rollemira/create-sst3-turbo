import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import type { CreateAWSLambdaContextOptions } from "@trpc/server/adapters/aws-lambda";
import type { APIGatewayProxyEvent } from "aws-lambda";
import { Config } from "sst/node/config";

import { appRouter } from "@acme/api";
import { db } from "@acme/db";

// provide a type for jwt authorizer
interface UserAuthorizer {
  jwt: {
    claims: Record<string, unknown>;
  };
}

function createContext({
  event, //context,
}: CreateAWSLambdaContextOptions<APIGatewayProxyEvent>) {
  const authorizer = event.requestContext.authorizer as UserAuthorizer;
  const user = authorizer ? JSON.stringify(authorizer.jwt.claims) : undefined;
  return {
    apiVersion: (event as { version?: string }).version ?? "1.0",
    // @ts-expect-error - HACK: the build server doesn't get SST types
    db: db(Config.DATABASE_URL),
    event: event,
    user,
  };
}

export const handler = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
  onError({ error, path }) {
    console.error(`>>> tRPC Error on '${path}'`, error);
  },
});
