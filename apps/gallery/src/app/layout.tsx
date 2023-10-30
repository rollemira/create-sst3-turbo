import type { Metadata } from "next";

import "~/styles/globals.css";

import { headers } from "next/headers";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

import { TRPCReactProvider } from "./providers";

/**Ï
 * Since we're passing `headers()` to the `TRPCReactProvider` we need to
 * make the entire app dynamic. You can move the `TRPCReactProvider` further
 * down the tree (e.g. /dashboard and onwards) to make part of the app statically rendered.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
  openGraph: {
    title: "Create T3 Turbo",
    description: "Simple monorepo with shared backend for web & mobile apps",
    url: "https://create-t3-turbo.vercel.app",
    siteName: "Create T3 Turbo",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jullerino",
    creator: "@jullerino",
  },
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar bg-neutral text-neutral-content">
          <div className="navbar-start">
            <div className="dropdown">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/no-noninteractive-tabindex */}
              <label tabIndex={0} className="btn-ghost btn lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <a href="#hello">Item 1</a>
                </li>
                {/* <li>
                <a href="#hello">Parent</a>
                <ul className="p-2">
                  <li>
                    <a href="#hello">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#hello">Submenu 2</a>
                  </li>
                </ul>
              </li> */}
                <li>
                  <a href="#hello">Item 3</a>
                </li>
              </ul>
            </div>
            <a href="#hello" className="btn-ghost btn text-xl normal-case">
              daisyUI
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="#hello">Item 1</a>
              </li>
              {/* <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a href="#hello">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#hello">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
              <li>
                <a href="#hello">Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">{/*    */}</div>
        </div>
        <TRPCReactProvider headers={headers()}>
          {props.children}
        </TRPCReactProvider>
        <footer className="footer footer-center rounded bg-base-200 p-10 text-base-content">
          <nav className="grid grid-flow-col gap-4">
            <a href="#hello" className="link-hover link">
              About us
            </a>
            <a href="#hello" className="link-hover link">
              Contact
            </a>
            <a href="#hello" className="link-hover link">
              Jobs
            </a>
            <a href="#hello" className="link-hover link">
              Press kit
            </a>
          </nav>
          <nav>
            <div className="fill-red grid grid-flow-col gap-4">
              <a href="#hello">
                <Twitter />
              </a>
              <a href="#hello">
                <Youtube />
              </a>
              <a href="#hello">
                <Facebook />
              </a>
              <a href="#hello">
                <Instagram />
              </a>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Rollem Technologies
            </p>
            <p className="text-xs">Made with ❤️ in St. Petersburg, Florida</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
