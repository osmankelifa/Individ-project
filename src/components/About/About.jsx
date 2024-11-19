import React from "react";
import CarPng from "../../assets/car1.png";
import sennai from "../../../public/sennai.jpeg"

const About = () => {
  return (
    <>
    
    <span id="about"></span>
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 h-screen">
      <div className="container">
        <div>
          <div data-aos="slide-right" data-aos-duration="1500">
            
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                Om oss
              </h1>
              <p className="leading-8 tracking-wide">
            
Vår historia
Habesha Beer föds ur Etiopiens hjärta, bryggd med förstklassiga ingredienser och ett engagemang för kvalitet. Vi är stolta över att ta med denna autentiska smak till Sverige och knyta samman kulturer en klunk i taget.

Vår resa i Sverige började med ett mål: att dela Habesha Beers själ med alla som älskar god öl och rika kulturella upplevelser. Från Stockholms etiopiska restauranger till livliga klubbar över hela landet har Habesha Beer blivit en favorit tack vare sin friska smak, snygga flaskdesign och mångsidighet.

Rotad i tradition, skapad för idag – Habesha Beer är mer än en dryck; det är en berättelse om stolthet, passion och möjligheter.
              </p>
            
              {/* <button data-aos="fade-up" className="button-outline">
                Get Started
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
