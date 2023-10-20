import path from "path";
import { ApiHandler } from "sst/node/api";

import { migrate } from "@acme/db";

export const handler = ApiHandler(async (_evt, _ctx) => {
  // HACK: this folder lives becasuse we copy migrations to the root
  // inside the ApiStack
  const pathToMIgrations = path.join(__dirname, "../../../", "migrations");

  await migrate(pathToMIgrations);

  return {
    body: "Migrated!",
  };
});
