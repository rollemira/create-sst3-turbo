import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/ApiStack";
import { AdminStack } from "./stacks/AdminStack";
import { StorefrontStack } from "./stacks/StorefrontStack";

export default {
  config(_input) {
    return {
      name: "acme",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(ApiStack).stack(AdminStack).stack(StorefrontStack);
  },
} satisfies SSTConfig;
