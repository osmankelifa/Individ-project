import { useState, useEffect } from "react";

import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

export const Navlinks = [
  {
    id: 1,
    name: "HEM",
    link: "/#",
    key: "home",
  },
  {
    id: 2,
    name: "OM OSS",
    link: "/#about",
    key: "about",
  },
  // {
  //   id: 3,
  //   name: "BEER",
  //   link: "/#",
  // },
  {
    id: 4,
    name: "KONTAKTA OSS",
    link: "/#KONTAKTA OSS",
    key: "restaurants",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div
      data-aos="zoom-out-down" // Move `data-aos` here
      className=" z-30 fixed top-0 left-0 w-full"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
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
                    className="text-lg font-medium py-2 hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-500 "
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implement */}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden">
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
