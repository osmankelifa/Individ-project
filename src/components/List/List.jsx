import habesha from "../../../public/habesha-beer.png";

const ListOfRestaurants = [
  {
    name: "Gojo Fasika",
    web: "https://www.gojorestaurang.se",
    address: "Renstiernas gata 48, 116 31 Stockholm",
    image: habesha, // Assuming habesha image is imported or available
    aosDelay: "400", // Adjust the delay as needed
  },
  {
    name: "TBU",
    web: "https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid",
    address: "adress",
    image: habesha, // Assuming habesha image is imported or available
    aosDelay: "400", // Adjust the delay as needed
  },
  {
    name: "TBU",
    web: "https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid",
    address: "adress",
    image: habesha, // Assuming habesha image is imported or available
    aosDelay: "400", // Adjust the delay as needed
  },
  {
    name: "TBU",
    web: "https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid",
    address: "adress",
    image: habesha, // Assuming habesha image is imported or available
    aosDelay: "400", // Adjust the delay as needed
  },
  {
    name: "TBU",
    web: "https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid",
    address: "adress",
    image: habesha, // Assuming habesha image is imported or available
    aosDelay: "400", // Adjust the delay as needed
  },
  {
    name: "TBU",
    web: "https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid",
    address: "adress",
    image: habesha, // Assuming habesha image is imported or available
    aosDelay: "400", // Adjust the delay as needed
  },
  {
    name: "TBU",
    web: "https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid",
    address: "adress",
    image: habesha, // Assuming habesha image is imported or available
    aosDelay: "400", // Adjust the delay as needed
  },
  {
    name: "TBU",
    web: "https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid",
    address: "adress",
    image: habesha, // Assuming habesha image is imported or available
    aosDelay: "400", // Adjust the delay as needed
  },
  {
    name: "TBU",
    web: "https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid",
    address: "adress",
    image: habesha, // Assuming habesha image is imported or available
    aosDelay: "400", // Adjust the delay as needed
  },

];

const List = () => {
  return (
    <div id="RESTAURANTS" className="pb-24 h-full">
      <div className="container">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3 py-10">
          Restauranger som serverar Habesha Beer
        </h1>
        <p className="text-sm pb-10"></p>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {ListOfRestaurants.map((data, index) => (
              <a
                key={index}
                href={data.web}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover z-20 cursor-pointer"
              >
                <div
                  data-aos="fade-up"
                  key={data.name}
                  data-aos-delay={data.aosDelay}
                  className="space-y-3 border-[0.5px] border-opacity-20  border-slate-300 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      src={data.image}
                      alt=""
                      className="w-full h-full object-contain mt-10 group-hover:scale-150 duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{data.name}</h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p className="text-base">{data.address}</p>
                    </div>
                  </div>
                </div>
              </a>
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
