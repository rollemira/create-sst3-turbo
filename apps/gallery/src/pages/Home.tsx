import GalleryPreview from "../components/gallery-preview";
import HeroSection from "../components/hero";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section id="gallery">
        {Array(5)
          .fill({})
          .map((_, j) => (
            <GalleryPreview key={j} />
          ))}
      </section>
    </>
  );
}
