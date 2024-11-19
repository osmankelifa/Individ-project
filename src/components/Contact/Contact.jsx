import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact" />
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              {/* <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Samarbeta med oss
              </h1> */}
              <p className="text-gray-400">
              Finns på utvalda restauranger, klubbar och återförsäljare. Vill du sälja Habesha Beer?
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                href="mailto:sennai@hotmail.com"
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase "
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
