import Image from "next/image";
import Link from "next/link";
import {
  GalleryThumbnails,
  GalleryVerticalEnd,
  Layout,
  LayoutDashboard,
  Settings,
  UploadCloud,
} from "lucide-react";

export default function BuilderHome() {
  return (
    <div className="grid h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <aside className="hidden border-r bg-zinc-100/40 dark:bg-zinc-800/40 lg:block">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <LayoutDashboard className=" h-6 w-6" />
              <span>Gallery Builder</span>
            </Link>
          </div>
          <nav className="grid flex-1 items-start space-y-2 px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg bg-zinc-100 px-4 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50"
              href="#"
            >
              <GalleryThumbnails className=" h-4 w-4" />
              Galleries
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg bg-zinc-100 px-4 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50"
              href="#"
            >
              <GalleryVerticalEnd className=" h-4 w-4" />
              Images
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href="#"
            >
              <Layout className="h-4 w-4" />
              Layout
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href="#"
            >
              <Settings className=" h-4 w-4" />
              Styles and Effects
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href="#"
            >
              <UploadCloud className=" h-4 w-4" />
              Publish
            </Link>
          </nav>
        </div>
      </aside>
      <main className="flex flex-col overflow-auto p-4 md:p-6">
        <div className="mb-4 flex gap-4">
          <button className="btn-secondary btn">Save</button>
          <button className="btn-primary btn">Publish</button>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 lg:col-span-2">
            <h2 className="mb-4 text-lg font-semibold">Images</h2>
            <div className="grid grid-cols-2 gap-2">
              <Image
                alt="Image 1"
                className="h-20 w-full rounded-lg border border-zinc-200 object-cover dark:border-zinc-800"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <Image
                alt="Image 2"
                className="h-20 w-full rounded-lg border border-zinc-200 object-cover dark:border-zinc-800"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <Image
                alt="Image 3"
                className="h-20 w-full rounded-lg border border-zinc-200 object-cover dark:border-zinc-800"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
            </div>
            <h2 className="mb-4 mt-8 text-lg font-semibold">Layouts</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-2 text-sm font-semibold">Masonry</h3>
                <Image
                  alt="Masonry layout"
                  className="h-20 w-full rounded-lg border border-zinc-200 object-cover dark:border-zinc-800"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-2 text-sm font-semibold">Grid</h3>
                <Image
                  alt="Grid layout"
                  className="h-20 w-full rounded-lg border border-zinc-200 object-cover dark:border-zinc-800"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
            </div>
            <h2 className="mb-4 mt-8 text-lg font-semibold">
              Styles and Effects
            </h2>
            <div className="flex gap-4">
              <button className="btn-ghost btn">None</button>
              <button className="btn-ghost btn">Black & White</button>
              <button className="btn-ghost btn">Sepia</button>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-4 text-lg font-semibold">Preview</h2>
            <Image
              alt="Preview"
              className="h-80 w-full rounded-lg border border-zinc-200 object-cover dark:border-zinc-800"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
