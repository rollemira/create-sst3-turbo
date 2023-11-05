import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="footer footer-center rounded bg-base-200 px-4 py-8 pt-4 font-semibold text-[#131D47]">
      <nav className="grid grid-flow-col gap-4 text-base">
        <Link to="/">Home</Link>
        <Link to="/archive">Archive</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <nav>
        <div className="fill-red grid grid-flow-col gap-4">
          <Link to="https://instagram.com/RollemIra" target="_blank">
            <Instagram height={32} width={32} />
          </Link>
          <Link to="https://github.com/RollemIra" target="_blank">
            <Github height={32} width={32} />
          </Link>
          <Link to="https://facebook.com/RollemIra" target="_blank">
            <Facebook height={32} width={32} />
          </Link>
          <Link to="https://twitter.com/RollemIra" target="_blank">
            <Twitter height={32} width={32} />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Link
            className="text-[#8d56fc] underline"
            to="https://rollemtech.com"
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
