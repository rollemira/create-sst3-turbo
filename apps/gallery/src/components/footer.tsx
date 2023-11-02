import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="footer footer-center mt-4 rounded bg-base-200 px-4 py-8 font-semibold text-[#131D47]">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/">Home</Link>
        <Link href="/archive">Archive</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <SignedIn>
          <Link href="/dashboard">Dashboard</Link>
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
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Link
            className="text-[#8d56fc] underline"
            href="https://rollemtech.com"
            target="_blank"
          >
            Rollem Technologies Inc.
          </Link>
        </p>
        <p className="text-xs">Made with ❤️ in St. Petersburg, Florida</p>
      </aside>
    </footer>
  );
}
