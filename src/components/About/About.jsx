const About = () => {
  return (
    <>
    <span id="about"></span>
<main className="relative h-auto min-h-[100dvh] py-10 md:py-20 grid gap-10 md:grid-cols-2">
  <section className="relative flex justify-center items-center order-first">
    <img
      src="./habesha-beer.png"
      className="relative left-4 sm:left-8 md:left-16 w-[150px] sm:w-[180px] md:w-[200px] h-[300px] sm:h-[350px] md:h-[400px] object-contain"
    />
    <img
      src="./habesha-beer.png"
      className="w-[150px] sm:w-[180px] md:w-[200px] h-[400px] sm:h-[500px] md:h-[600px] object-contain z-10"
    />
    <img
      src="./habesha-beer.png"
      className="relative right-4 sm:right-8 md:right-16 w-[150px] sm:w-[180px] md:w-[200px] h-[300px] sm:h-[350px] md:h-[400px] object-contain"
    />
  </section>
  <section className="order-last flex flex-col items-center text-center md:text-left justify-center px-5 sm:px-10 md:px-20">
    <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-16">Om Oss</h1>
    <p className="leading-7 sm:leading-8 font-sans font-thin tracking-wide text-base sm:text-lg md:text-2xl">
      Vår historia Habesha Beer föds ur Etiopiens hjärta, bryggd med förstklassiga ingredienser och ett engagemang för kvalitet.
      Vi är stolta över att ta med denna autentiska smak till Sverige och knyta samman kulturer en klunk i taget. Vår resa i
      Sverige började med ett mål: att dela Habesha Beers själ med alla som älskar god öl och rika kulturella upplevelser. Från
      Stockholms etiopiska restauranger till livliga klubbar över hela landet har Habesha Beer blivit en favorit tack vare sin
      friska smak, snygga flaskdesign och mångsidighet. Rotad i tradition, skapad för idag – Habesha Beer är mer än en dryck; det
      är en berättelse om stolthet, passion och möjligheter.
    </p>
  </section>
</main>

    </>
  );
};

export default About;
