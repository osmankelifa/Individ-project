const About = () => {
  return (
    <>
      <span id="about"></span>
      <main className="relative h-[100dvh]  py-20 grid md:grid-cols-2 overflow-hidden">
        <section className="relative flex justify-center items-center  order-first">
          <img
            src="./habesha-beer.png"
            className=" relative left-16 w-[200px] h-[600px]  object-contain "
          />
          <img
            src="./habesha-beer.png"
            className="w-[200px] h-[800px] object-contain z-10 "
          />
          <img
            src="./habesha-beer.png"
            className="w-[200px] relative right-16 h-[600px] object-contain "
          />
        </section>
        <section className="order-last flex flex-col items-center justify-center p-20">
          <h1 className="font-orbitron text-5xl mb-20 ">Om Oss</h1>
          <p className="leading-8 font-sans font-thin tracking-wide text-2xl ">
            Vår historia Habesha Beer föds ur Etiopiens hjärta, bryggd med
            förstklassiga ingredienser och ett engagemang för kvalitet. Vi är
            stolta över att ta med denna autentiska smak till Sverige och knyta
            samman kulturer en klunk i taget. Vår resa i Sverige började med ett
            mål: att dela Habesha Beers själ med alla som älskar god öl och rika
            kulturella upplevelser. Från Stockholms etiopiska restauranger till
            livliga klubbar över hela landet har Habesha Beer blivit en favorit
            tack vare sin friska smak, snygga flaskdesign och mångsidighet.
            Rotad i tradition, skapad för idag – Habesha Beer är mer än en
            dryck; det är en berättelse om stolthet, passion och möjligheter.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
