import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars} from "react-icons/fa6";
import title from "../assets/title.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop menu */}
        <div className="mx-auto hidden max-w-5xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-center items-center gap-6">
            <div className="flexjustify-center items-center">
              <a href="#">
                <div className="flex flex-row items-center gap-3">
                  {/* <MdOutlineWebhook className="text-4xl animate-spin" /> */}
                  <img src={title} width={25} className="animate-spin" />
                  <p className="text-xl font-extrabold running-gradient">
                    BHUPESH ROUSHAN
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-xs font-bold text-gray-400">
                    MERN Stack Devloper
                  </p>
                </div>
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm font-bold hover:text-yellow-400"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            {/* <div>
              <a href="#">
                <img src={logo} width={90} className="m-2" alt="logo" />
              </a>
            </div> */}

            <div className="flex justify-center items-center p-2 pl-5">
              <a href="#">
                <div className="flex flex-row items-center gap-3">
                  {/* <MdOutlineWebhook className="text-4xl animate-spin" /> */}
                  <img src={title} width={25} className="animate-spin" />
                  <p className="text-xl font-extrabold running-gradient">
                    BHUPESH ROUSHAN
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-xs font-bold text-gray-400">
                    MERN Stack Devloper
                  </p>
                </div>
              </a>
            </div>

            <div className="flex items-center ">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleDrawer}
              >
                {isDrawerOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>

          {isDrawerOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
