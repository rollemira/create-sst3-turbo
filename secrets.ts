import { execSync } from "node:child_process";
import { exit } from "node:process";
const { parseArgs } = require("node:util");
import * as dotenv from "dotenv";

const args = process.argv;
const options = {
  env: {
    type: "string",
    //short: "e", <-- doesn't seem to work
  },
  stage: {
    type: "string",
    //short: "s", <-- doesn't seem to work
  },
  remove: {
    type: "boolean",
  },
};
const { values } = parseArgs({
  args,
  options,
  allowPositionals: true,
});

console.log("Setting up secrets...");
const keys = ["DATABASE_URL"];

if (values["remove"]) {
  keys.forEach((key) =>
    execSync(
      `
npx sst secrets remove${stage ? ` --stage${stage}` : ""} --fallback ${key}
`,
      {
        stdio: "inherit",
      }
    )
  );
  exit(0);
}

const envFile = values["env"] ?? ".env";
console.log(`Loading from ${envFile}`);
dotenv.config({
  path: `./${envFile}`,
});
const stage = values["stage"] ?? undefined;

keys.forEach((key) =>
  execSync(
    `
npx sst secrets set${stage ? ` --stage${stage}` : ""} --fallback ${key} '${
      process.env.DATABASE_URL
    }'
`,
    {
      stdio: "inherit",
    }
  )
);
