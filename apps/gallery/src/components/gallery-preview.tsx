export default function GalleryPreview() {
  return (
    <div className="bg-[#131D47] text-white">
      <h2 className="pb-4 pl-3 pt-5 text-3xl font-medium">My Fun Gallery</h2>
      <div className="px-2">
        <div className="carousel-center carousel rounded-box space-x-4 bg-teal-300 p-2">
          <div className="carousel-item">
            <img
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <img
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <img
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <img
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <img
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <img
              title="Something great"
              alt="Some Alt Text"
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="rounded-box"
              width={300}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <img
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
      <div className="mt-4 h-[2px] w-full bg-[#e5e5e5] shadow"></div>
    </div>
  );
}
