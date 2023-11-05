import type { TRPCLink } from "@trpc/client";
import { observable } from "@trpc/server/observable";

import type { AppRouter } from "@acme/api";

export const unauthorizedLink: TRPCLink<AppRouter> = () => {
  // more here: https://trpc.io/docs/client/links
  // here we just got initialized in the app - this happens once per app
  // useful for storing cache for instance
  return ({ next, op }) => {
    // this is when passing the result to the next link
    // each link needs to return an observable which propagates results
    return observable((observer) => {
      //console.log("performing operation:", op);
      const unsubscribe = next(op).subscribe({
        next(value) {
          observer.next(value);
        },
        error(err) {
          if (
            err.message &&
            err.message.toLowerCase().includes("unauthorized")
          ) {
            console.log(">>> unauthorized: this should redirect to login");
          }
          observer.error(err);
        },
        complete() {
          observer.complete();
        },
      });
      return unsubscribe;
    });
  };
};
