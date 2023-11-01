import { headers } from "next/headers";

import { TRPCReactProvider } from "../providers";

/**Ï
 * Since we're passing `headers()` to the `TRPCReactProvider` we need to
 * make the entire app dynamic. You can move the `TRPCReactProvider` further
 * down the tree (e.g. /dashboard and onwards) to make part of the app statically rendered.
 */
export const dynamic = "force-dynamic";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider headers={headers()}>{props.children}</TRPCReactProvider>
  );
}
