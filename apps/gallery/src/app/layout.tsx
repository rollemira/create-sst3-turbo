import "~/styles/globals.css";

import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistMono, GeistSans } from "geist/font";

import SiteFooter from "~/components/footer";
import SiteHeader from "~/components/header";

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
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ""}
    >
      <html
        lang="en"
        className={`${GeistSans.variable} ${GeistMono.variable}`}
        suppressHydrationWarning={true}
      >
        <body suppressHydrationWarning={true}>
          <SiteHeader />
          {props.children}
          <SiteFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
