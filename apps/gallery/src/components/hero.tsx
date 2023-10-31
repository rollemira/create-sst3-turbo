/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xua5Rc5mMLA
 */

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-md md:w-max">
          <h1 className="text-5xl font-bold text-white">
            @Rollemtech Image Gallery
          </h1>
          <p className="mx-auto max-w-xl py-6 text-xl text-white">
            Explore a world of stunning images.
          </p>
          <Link href="#gallery" className="btn-lg btn">
            Start Exploring
          </Link>
        </div>
      </div>
    </section>
  );
}
