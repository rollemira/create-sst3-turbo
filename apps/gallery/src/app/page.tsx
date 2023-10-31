"use client";

import GalleryPreview from "~/components/gallery-preview";
import HeroSection from "~/components/hero";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="px-8 py-12" id="gallery">
        {Array(5)
          .fill({})
          .map((_, j) => (
            <GalleryPreview key={j} />
          ))}
      </section>
    </>
  );
}
