import "./fetch-polyfill"; // global fetch polyfill

import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import type { CreateAWSLambdaContextOptions } from "@trpc/server/adapters/aws-lambda";
import type { APIGatewayProxyEvent } from "aws-lambda";
import { Config } from "sst/node/config";

import { appRouter } from "@acme/api";
import { db } from "@acme/db";

//import { headers } from "./cors";

function createContext({
  event, //context,
}: CreateAWSLambdaContextOptions<APIGatewayProxyEvent>) {
  return {
    event: event,
    apiVersion: (event as { version?: string }).version ?? "1.0",
    user: event.headers["x-user"],
    // @ts-expect-error: HACK: the build server doesn't get SST types
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
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
