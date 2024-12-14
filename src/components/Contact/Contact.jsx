import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact" />
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6 rounded-lg">
            <div className="col-span-2 space-y-3 pt-2 pl-2">
              {/* <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Samarbeta med oss
              </h1> */}
              <p className="text-gray-400">
              Finns på utvalda restauranger, klubbar och återförsäljare. Vill du sälja Habesha Beer?
              </p>
            </div>
            <div className="flex justify-center sm:place-items-center">
              <a
                href="mailto:sennai@hotmail.com"
                className="inline-block font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
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
