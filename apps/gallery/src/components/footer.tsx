import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="footer footer-center rounded bg-base-200 p-10 text-base-content">
      <nav className="grid grid-flow-col gap-4">
        <a href="/" className="link-hover link">
          Home
        </a>
        <a href="/archive" className="link-hover link">
          Archive
        </a>
        <a href="/about" className="link-hover link">
          About
        </a>
        <a href="/pricing" className="link-hover link">
          Pricing
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
          Copyright © {new Date().getFullYear()} - All right reserved by Rollem
          Technologies Inc.
        </p>
        <p className="text-xs">Made with ❤️ in St. Petersburg, Florida</p>
      </aside>
    </footer>
  );
}
