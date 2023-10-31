import "~/styles/globals.css";

import type { Metadata } from "next";
import { headers } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";

import SiteFooter from "~/components/footer";
import SiteHeader from "~/components/header";
import { TRPCReactProvider } from "./providers";

/**Ï
 * Since we're passing `headers()` to the `TRPCReactProvider` we need to
 * make the entire app dynamic. You can move the `TRPCReactProvider` further
 * down the tree (e.g. /dashboard and onwards) to make part of the app statically rendered.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "@RollemIra Image Gallery",
  description: "Image gallery of stunning photos",
  openGraph: {
    title: "@RollemIra Image Gallery",
    description: "Image gallery of stunning photos",
    url: "https://gallery.rollemtech.app",
    siteName: "@RollemIra Image Gallery",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rollemira",
    creator: "@rollemira",
  },
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SiteHeader />
          <TRPCReactProvider headers={headers()}>
            {props.children}
          </TRPCReactProvider>
          <SiteFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
