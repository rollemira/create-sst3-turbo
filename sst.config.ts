import { SSTConfig } from "sst";
import { BackendStack } from "./stacks/BackendStack";
import { WebSiteStack } from "./stacks/WebStack";

export default {
  config(_input) {
    return {
      name: "acme",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(BackendStack).stack(WebSiteStack);
  },
} satisfies SSTConfig;
