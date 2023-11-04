import Link from "next/link";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="footer footer-center rounded bg-base-200 px-4 py-8 pt-4 font-semibold text-[#131D47]">
      <nav className="grid grid-flow-col gap-4 text-base">
        <Link href="/">Home</Link>
        <Link href="/archive">Archive</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
      <nav>
        <div className="fill-red grid grid-flow-col gap-4">
          <Link href="https://instagram.com/RollemIra" target="_blank">
            <Instagram height={32} width={32} />
          </Link>
          <Link href="https://github.com/RollemIra" target="_blank">
            <Github height={32} width={32} />
          </Link>
          <Link href="https://facebook.com/RollemIra" target="_blank">
            <Facebook height={32} width={32} />
          </Link>
          <Link href="https://twitter.com/RollemIra" target="_blank">
            <Twitter height={32} width={32} />
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
