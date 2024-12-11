import React  from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import List from "./components/List/List";
import Beer from "./components/Beer/Beer";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  // dark mode start
  
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar  />
      <Hero />
      <About />
      {/* <Services /> */}
      <Beer />
      <List />
      {/* <Testimonial /> */}
      
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
