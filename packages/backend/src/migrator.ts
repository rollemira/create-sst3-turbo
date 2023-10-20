import { ApiHandler } from "sst/node/api";

//import { migrate } from "@acme/data";

// eslint-disable-next-line @typescript-eslint/require-await
export const handler = ApiHandler(async (_evt, _ctx) => {
  // HACK: this folder lives becasuse we copy migrations to the root
  // inside the ApiStack
  //const pathToMIgrations = "migrations";

  //await migrate(pathToMIgrations);

  return {
    body: "Migrated! (Still under construction)",
  };
});
