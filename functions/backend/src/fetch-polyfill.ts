// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
// fetch-polyfill.js
import fetch, {
  Blob,
  blobFrom,
  blobFromSync,
  File,
  fileFrom,
  fileFromSync,
  FormData,
  Headers,
  Request,
  Response,
} from "node-fetch";

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
  globalThis.Headers = Headers;
  globalThis.Request = Request;
  globalThis.Response = Response;
}
