import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn-primary btn">Get Started</button>
          </div>
        </div>
      </div>

      <div className="px-8 py-12">
        <h2 className="mb-4 text-3xl font-medium">My Fun Gallery</h2>
        <div className="carousel-center carousel rounded-box space-x-4 bg-neutral p-4">
          <div className="carousel-item">
            <Image
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
}
