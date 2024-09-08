import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  // {
  //   id: 3,
  //   name: "BEER",
  //   link: "/#",
  // },
  {
    id: 4,
    name: "RESTAURANTS",
    link: "/#RESTAURANTS",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div
      data-aos="zoom-out-down" // Move `data-aos` here
      className={`duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-r from-orange-600 to-slate-900"
          : "bg-gradient-to-r from-orange-400 to-amber-50"
      } ${isScrolled ? "bg-opacity-100" : "bg-opacity-80"} ${
        isScrolled ? "text-black" : "text-white"
      } dark:text-white z-30 fixed top-0 left-0 w-full`}
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for better visibility
      }}
    >
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <img src="habeshalogo2.png" className="w-12 h-12" alt="Logo" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className={`text-lg font-medium py-2 hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-500 ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implement */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
