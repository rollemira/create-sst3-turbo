import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import type { CreateAWSLambdaContextOptions } from "@trpc/server/adapters/aws-lambda";
import type { APIGatewayProxyEvent } from "aws-lambda";

import { appRouter } from "@acme/api";

//import { headers } from "./cors";

function createContext({
  event, //context,
}: CreateAWSLambdaContextOptions<APIGatewayProxyEvent>) {
  return {
    event: event,
    apiVersion: (event as { version?: string }).version ?? "1.0",
    user: event.headers["x-user"],
  };
}

export const handler = awsLambdaRequestHandler({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  router: appRouter,
  createContext,
  onError({ error, path }) {
    console.error(`>>> tRPC Error on '${path}'`, error);
  },
});
