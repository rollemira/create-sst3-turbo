import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/ApiStack";
import { WebSiteStack } from "./stacks/WebStack";
import { DbStack } from "./stacks/DbStack";

export default {
  config(_input) {
    return {
      name: "acme",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(DbStack).stack(ApiStack).stack(WebSiteStack);
  },
} satisfies SSTConfig;
