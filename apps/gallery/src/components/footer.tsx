import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="footer footer-center mt-4 rounded bg-base-200 p-8 text-base-content">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link-hover link">
          Home
        </Link>
        <Link href="/archive" className="link-hover link">
          Archive
        </Link>
        <Link href="/about" className="link-hover link">
          About
        </Link>
        <Link href="/pricing" className="link-hover link">
          Pricing
        </Link>
        <SignedIn>
          <Link
            className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-200"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </SignedIn>
      </nav>
      <nav>
        <div className="fill-red grid grid-flow-col gap-4">
          <Link href="#hello">
            <Twitter height={32} width={32} />
          </Link>
          <Link href="#hello">
            <Youtube height={32} width={32} />
          </Link>
          <Link href="#hello">
            <Facebook height={32} width={32} />
          </Link>
          <Link href="#hello">
            <Instagram height={32} width={32} />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Rollem
          Technologies Inc.
        </p>
        <p className="text-xs">Made with ❤️ in St. Petersburg, Florida</p>
      </aside>
    </footer>
  );
}
