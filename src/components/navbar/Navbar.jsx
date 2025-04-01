import React from "react";
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <div
        className="bg-white shadow-md dark:bg-gray-900 dark:text-white
        duration-200"
      >
        <div className="container py-3 sm:py-0">
          <div className="flex items-center justify-between">
            <div className="">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex items-center justify-between gap-2"
              >
                <img src={Logo} alt="Foodtie Zone" className="w-10" /> Foodtie
                Zone
              </a>
            </div>
            <div className="flex items-center gap-4">
              <ul className="gap-4 hidden sm:flex ">
                <li>
                  <a
                    href="#"
                    className="px-4 py-4 inline-block hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-4 inline-block hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-4 inline-block hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="flex">
                <button className=" flex items-center gap-1 bg-gradient-to-r from-primary to-secondary 
                  px-4 py-1 rounded-full text-white hover:scale-105 duration-300">
                  Order
                  <FaCartShopping 
                    className="text-white text-xl cursor-pointer
                    drop-shadow-sm"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
