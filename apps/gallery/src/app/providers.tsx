"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { httpBatchLink, loggerLink } from "@trpc/client";
import superjson from "superjson";

import { api } from "~/utils/api";
import { unauthorizedLink } from "~/utils/links";
import { AccessTokens } from "~/utils/tokens";

export function TRPCReactProvider(props: {
  children: React.ReactNode;
  headers?: Headers;
}) {
  const { getToken, isSignedIn } = useAuth();
  if (isSignedIn) {
    void getToken({ template: "api-gateway" }).then((token) => {
      AccessTokens.store(token!);
    });
  }

  useEffect(() => {
    if (isSignedIn) {
      void getToken({ template: "api-gateway" }).then((token) => {
        AccessTokens.store(token!);
      });
    }
  }, [getToken, isSignedIn]);
  // don't let queries happen before we're ready
  const [isLoading, setIsLoading] = useState(false);
  const [stateToken] = useState<string | null>(AccessTokens.get());

  const createClient = useCallback(
    (token?: string | null) => {
      return api.createClient({
        transformer: superjson,
        links: [
          unauthorizedLink,
          loggerLink({
            enabled: (opts) =>
              process.env.NODE_ENV === "development" ||
              (opts.direction === "down" && opts.result instanceof Error),
          }),
          httpBatchLink({
            // if we have an accessToken, call secure endpoints
            url: `${process.env.NEXT_PUBLIC_API_URL}${
              !token ? "/public" : ""
            }/trpc`,
            headers() {
              const headers = new Map(props.headers);
              headers.set("x-trpc-source", "admin");
              if (token) {
                // add accessToken to headers
                headers.set("authorization", `Bearer ${token}`);
              }
              return Object.fromEntries(headers);
            },
          }),
        ],
      });
    },
    [props.headers],
  );

  // default query client
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
            onError: (err) => {
              console.log(err);
            },
          },
        },
      }),
  );
  // default public endpoints
  const [trpcClient, setTrpcClient] = useState(() => createClient(stateToken));

  useEffect(() => {
    setIsLoading(true);
    setTrpcClient(createClient(stateToken));
    setIsLoading(false);
  }, [stateToken, createClient]);

  if (isLoading) return <></>;
  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </api.Provider>
  );
}
