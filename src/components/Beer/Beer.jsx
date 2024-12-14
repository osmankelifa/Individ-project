const Beer = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-orange-600 to-slate-900">
      <div className=" text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-white text-2xl text-center sm:text-4xl font-semibold font-serif">
              Habesha beer
            </h1>
            <p className="text-white text-center sm:px-20 md:text-left justify-center px-5 md:px-20">
              Ölen som förenar oss Habesha Beer är en ljus lager på 5 % som är
              perfekt bryggd för att ge en mjuk och uppfriskande smak i varje
              klunk. Den passar utmärkt till kryddiga etiopiska rätter, lätta
              snacks eller trevliga samtal. Vad gör Habesha Beer speciell?
              Smaken: En frisk och ren smak som är lätt att dricka. Designen: En
              stilren flaska som sticker ut och väcker nyfikenhet.
              Mångsidigheten: Perfekt för restauranger, klubbar och mysiga
              stunder. Bli en del av den växande Habesha Beer-gemenskapen i
              Sverige och upptäck varför alla pratar om vår öl.
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-4"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beer;
