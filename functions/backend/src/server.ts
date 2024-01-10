import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import type { CreateAWSLambdaContextOptions } from "@trpc/server/adapters/aws-lambda";
import type { APIGatewayProxyEvent } from "aws-lambda";
import { Config } from "sst/node/config";

import { appRouter } from "@acme/api";
import { db } from "@acme/db";

//import { headers } from "./cors";

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
  const source = event?.headers["x-trpc-source"] ?? "unknown";
  console.log(">>> tRPC Request from", source, "by", user ?? "anonymous");
  return {
    event: event,
    apiVersion: (event as { version?: string }).version ?? "1.0",
    user: event.headers["x-user"],
    // @ts-expect-error - HACK: the build server doesn't get SST types
    db: db(Config.DATABASE_URL as string),
  };
}

export const handler = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
  onError({ error, path }) {
    console.error(`>>> tRPC Error on '${path}'`, error);
  },
});
