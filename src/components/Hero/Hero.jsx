import React, { useEffect } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import habesha from "../../../public/habesha beer.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
  
    <div className={`duration-300 bg-gradient-to-r ${theme === "dark" ? "from-orange-600 to-slate-900" : "from-orange-400 to-amber-50"} text-white dark:text-black h-screen py-8`}>
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-2 sm:order-3"
          >
            <img
              src={theme === "dark" ? habesha : habesha}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[400px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] "
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 ml-10">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
        
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif flex "
            >
              Habesha Beer
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis explicabo quibusdam quae reprehenderit ab{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
