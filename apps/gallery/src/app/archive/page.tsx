/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ppn6ejN2nUh
 */
import Image from "next/image";
import Link from "next/link";

export default function ArchivePage() {
  return (
    <section className="my-8">
      <div className="mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-900">Image Archive</h1>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                2023
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                <Link
                  className="text-indigo-500 hover:text-indigo-700"
                  href="#"
                >
                  View Albums
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <Image
                alt="2023 Archive"
                className="h-32 w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                2022
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                <Link
                  className="text-indigo-500 hover:text-indigo-700"
                  href="#"
                >
                  View Albums
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <Image
                alt="2022 Archive"
                className="h-32 w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                2021
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                <Link
                  className="text-indigo-500 hover:text-indigo-700"
                  href="#"
                >
                  View Albums
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <Image
                alt="2021 Archive"
                className="h-32 w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
