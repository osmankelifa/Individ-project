import { useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "./habesha-beer.png",
    "./habeshalogo2.png",
    "./habesha-beer.png",
    "./habeshalogo2.png",
  ];

  const back = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <article className="relative w-full  flex flex-shrink-0 overflow-hidden shadow-2xl my-20">
      <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
        <span>{currentIndex + 1}</span> / <span>{images.length}</span>
      </div>

      {images.map((image, index) => (
        <figure
          key={index}
          className={`h-[20rem] transition-opacity duration-300 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt="Slide"
            className="absolute inset-0 z-10 h-full w-full object-contain opacity-70"
          />
          {/* <figcaption className="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
            Any kind of content here!
            <br />
            Primum in nostrane potestate est, quid meminerimus? Nulla erit
            controversia.
          </figcaption> */}
        </figure>
      ))}

      <button
        onClick={back}
        className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
      >
        <svg
          className="w-8 h-8 text-gray-500 hover:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
      >
        <svg
          className="w-8 h-8 text-gray-500 hover:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </article>
  );
};

export default ImageSlider;
