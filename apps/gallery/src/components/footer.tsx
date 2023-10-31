import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="footer footer-center rounded bg-base-200 p-10 text-base-content">
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
      </nav>
      <nav>
        <div className="fill-red grid grid-flow-col gap-4">
          <Link href="#hello">
            <Twitter />
          </Link>
          <Link href="#hello">
            <Youtube />
          </Link>
          <Link href="#hello">
            <Facebook />
          </Link>
          <Link href="#hello">
            <Instagram />
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
