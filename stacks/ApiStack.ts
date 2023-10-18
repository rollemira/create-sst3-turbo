import { StackContext, Api, EventBus } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {
  // const bus = new EventBus(stack, "bus", {
  //   defaults: {
  //     retries: 10,
  //   },
  // });

  const api = new Api(stack, "api", {
    // defaults: {
    //   function: {
    //     bind: [bus],
    //   },
    // },
    // cors: {
    //   allowOrigins: ["*"],
    //   allowMethods: ["OPTIONS", "GET", "POST"],
    //   allowHeaders: ["*"],
    //   allowCredentials: true,
    // },
    routes: {
      "OPTIONS /trpc/{proxy+}": "packages/backend/src/options.handler",
      "GET /trpc/{proxy+}": "packages/backend/src/server.handler",
      "POST /trpc/{proxy+}": "packages/backend/src/server.handler",
    },
  });

  // bus.subscribe("todo.created", {
  //   handler: "packages/functions/src/events/todo-created.handler",
  // });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}
