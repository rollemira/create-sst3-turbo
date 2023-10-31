import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/ApiStack";
import { WebSiteStack } from "./stacks/WebStack";

export default {
  config(_input) {
    return {
      name: "rollemtech",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(ApiStack).stack(WebSiteStack);
  },
} satisfies SSTConfig;
