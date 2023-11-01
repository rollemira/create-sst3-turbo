"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { httpBatchLink, loggerLink } from "@trpc/client";
import superjson from "superjson";

import { api } from "~/utils/api";

export function TRPCReactProvider(props: {
  children: React.ReactNode;
  headers?: Headers;
}) {
  const { getToken, isSignedIn } = useAuth();
  // don't let queries happen before we're ready
  const [isLoading, setIsLoading] = useState(false);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      }),
  );

  const createClient = useCallback(
    (accessToken?: string | null) =>
      api.createClient({
        transformer: superjson,
        links: [
          loggerLink({
            enabled: (opts) =>
              process.env.NODE_ENV === "development" ||
              (opts.direction === "down" && opts.result instanceof Error),
          }),
          httpBatchLink({
            // if we have an accessToken, call secure endpoints
            url: `${process.env.NEXT_PUBLIC_API_URL}${
              accessToken ? "/secure" : ""
            }/trpc`,
            headers() {
              const headers = new Map(props.headers);
              headers.set("x-trpc-source", "gallery");
              console.log(">>> headers accessToken", accessToken);
              if (accessToken) {
                // add accessToken to headers
                headers.set("authorization", `Bearer ${accessToken}`);
              }
              return Object.fromEntries(headers);
            },
          }),
        ],
      }),
    [props.headers],
  );

  // default public endpoints
  const [trpcClient, setTrpcClient] = useState(() => createClient());

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      setIsLoading(true);
      let accessToken: string | null = null;
      if (isSignedIn) {
        // get access token
        console.log(">>> signed in, getting access token");
        accessToken = await getToken({ template: "api-gateway" });
        console.log(">>> accessToken", accessToken);
      }
      setTrpcClient(() => createClient(accessToken));
      setIsLoading(false);
    })();
  }, [createClient, getToken, isSignedIn]);

  if (isLoading) return <></>;

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration transformer={superjson}>
          {props.children}
        </ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </api.Provider>
  );
}
