import { headers } from "./cors";

export const handler = () => {
  //req) => {
  return {
    statusCode: 204,
    ok: true,
    headers,
  };
};
