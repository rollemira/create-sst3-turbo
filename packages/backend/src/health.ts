import { ApiHandler } from "sst/node/api";

import { headers } from "./cors";

// eslint-disable-next-line @typescript-eslint/require-await
export const handler = ApiHandler(async (_evt, _ctx) => {
  return {
    statusCode: 200,
    ok: true,
    headers,
    body: JSON.stringify({
      up: true,
    }),
  };
});
