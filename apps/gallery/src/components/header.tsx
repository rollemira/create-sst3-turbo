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
    <header className="justify flex w-full flex-col items-center justify-between bg-white px-6 py-4 md:flex-row">
      <Link href="/">
        <div className="flex flex-row">
          <Image
            alt="logo"
            height={60}
            src="/branding/logo-icon-512.png"
            width={60}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="my-auto ml-4 text-xl font-bold text-gray-700 dark:text-white">
            @RollemIra
          </span>
        </div>
      </Link>
      <nav className="flex items-center space-x-6 pt-4 md:pt-0">
        <Link
          className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-200"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-200"
          href="/archive"
        >
          Archive
        </Link>
        <Link
          className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-200"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-200"
          href="/pricing"
        >
          Pricing
        </Link>
        <SignedIn>
          <Link
            className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-200"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <UserButton afterSignOutUrl="/" />
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
