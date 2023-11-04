/**
 * v0 by Vercel.
 * @see https://v0.dev/t/om7QitO0LP6
 */
import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

// import { Search } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="justify sticky top-0 z-50 flex w-full flex-col items-center justify-between bg-teal-300 px-6 py-4 md:flex-row">
      <Link href="/">
        <div className="flex flex-row">
          <Image
            alt="logo"
            height={50}
            src="/branding/logo-icon-512.png"
            width={50}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-md"
          />
          <div className="ml-0.5 h-[50px] rounded-md bg-[#131D47] px-4 text-xl font-bold text-[#5EDADC]">
            <div className="my-2.5">@RollemIra</div>
          </div>
        </div>
      </Link>
      <nav className="flex items-center space-x-6 pt-4 font-semibold text-[#131D47] md:pt-0">
        <Link className="hover:text-[#131d47ba]" href="/">
          Home
        </Link>
        <Link className="hover:text-[#131d47ba]" href="/archive">
          Archive
        </Link>
        <Link className="hover:text-[#131d47ba]" href="/about">
          About
        </Link>
        <Link className="hover:text-[#131d47ba]" href="/pricing">
          Pricing
        </Link>
        <SignedIn>
          <UserButton afterSignOutUrl="/logout" />
        </SignedIn>
      </nav>
      {/* <div className="relative">
        <input
          className="rounded-md border border-gray-300 py-2 pl-10 pr-4 text-gray-700 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          placeholder="Search ..."
          type="text"
        />
        <Search
          width={24}
          height={24}
          className=" absolute left-2 top-2 h-6 w-6 text-gray-500 dark:text-gray-400"
        />
      </div> */}
    </header>
  );
}
