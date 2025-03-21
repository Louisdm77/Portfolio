import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false); // Boolean false

  const handleNavBarShow = () => {
    setShowNav(!showNav);
  };

  const navItem = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About me", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact me", link: "/contact" },
  ];

  return (
    <div className="p-4 flex justify-between items-center relative">
      <div className="">
        <div className="lg:hidden text-xl">
          <GiHamburgerMenu
            className={`${showNav ? "hidden" : "block"}`}
            onClick={handleNavBarShow}
          />
          <FaTimes
            className={`${!showNav ? "hidden" : "block"}`}
            onClick={handleNavBarShow}
          />
        </div>
        <div
          className={`w-full p-2 mt-4 absolute left-0 ${
            !showNav ? "hidden" : "block"
          }`}
        >
          <ul className="block lg:hidden bg-gray-300 text-black">
            {navItem.map((item, index) => (
              <li key={index} className="p-2 hover:text-black hover:bg-white">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="logo  ml-10">LOGO</div>

      <div className="flex items-center">
        <ul className="hidden lg:flex items-center">
          {navItem.map((item, index) => (
            <li key={index} className="ml-4">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button className="hire py-1 px-2 rounded ">Hire Me</button>
      </div>
    </div>
  );
};

export default NavBar;
