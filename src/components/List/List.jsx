import React from "react";
import habesha from "../../../public/habesha beer.png"

const ListOfRestaurants = [
  {

    name: <a href="https://www.gojorestaurang.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:">Gojo Fasika</a>,
    address: "Renstiernas gata 48, 116 31 Stockholm",
    image: habesha, // Assuming habesha image is imported or available
    aosDelay: "400", // Adjust the delay as needed
  },
  
];

const List = () => {
  return (
    <div id="RESTAURANTS" className="pb-24 h-screen">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3 py-10"
        >
          Restaurants serving Habesha Beer
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {ListOfRestaurants.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p className="text-base">{data.address}</p>
                  
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  LOGO</p>

              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          {/* <button data-aos="fade-up" className="button-outline">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default List;
