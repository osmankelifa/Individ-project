import { useEffect } from "react";

import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
    <div className="relative w-screen  h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0   w-full h-full">
        <video
          className="w-full h-full  object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./habesha.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Large Logo and Slogan */}
      <div className="absolute inset-y-0 left-0 flex flex-col w-full  text-center  items-center justify-center z-10">
        <div className="grid grid-cols-2 w-full px-12 mx-auto">
          <div className="relative   h-full flex flex-col justify-center text-start   ">
            <h1
              data-aos="fade-up"
              data-aos-delay="1500"
              className="text-7xl   font-bound font-semibold backdrop-blur-sm rounded-lg text-center"
            >
              Habesha Beer Sverige
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
