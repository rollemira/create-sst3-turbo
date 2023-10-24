import { ApiHandler } from "sst/node/api";

// eslint-disable-next-line @typescript-eslint/require-await
export const handler = ApiHandler(async (_evt, _ctx) => {
  return {
    statusCode: 200,
    ok: true,
    body: JSON.stringify({
      up: true,
    }),
  };
});
