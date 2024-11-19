import React, { useEffect } from "react";
import habesha from "../../../public/habesha beer.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
  
    <div className={`duration-400 bg-gradient-to-r ${theme === "dark" ? "from-orange-600 to-slate-900" : "from-orange-400 to-amber-50"} text-white dark:text-black h-screen py-8`}>
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
              className="text-5xl lg:text-4xl font-semibold font-serif flex "
            >
              Habesha Beer Sverige!
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
            Upplev Etiopiens vibranta smaker här i Sverige. Habesha Beer är mer än bara en dryck – det är en hyllning till kultur, gemenskap och hantverk. Vår ljusa lager på 5 % är bryggd med precision och passion, vilket ger en uppfriskande och lättdrucken öl.

Oavsett om du är på din favoritrestaurang, en trendig klubb eller hemma i soffan, är Habesha Beer den perfekta följeslagaren. Utforska de rika smakerna, den snygga designen och den globala charmen som gör vår öl unik.

Smaka på Etiopiens stolthet. Skål – Melkam Megeb!{" "}
            </p>
            {/* <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
