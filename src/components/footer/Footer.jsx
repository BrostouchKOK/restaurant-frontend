import React from "react";
import foooterLogo from "../../assets/food-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { BiMobileAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950">
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="container max-w-[1200px] mx-auto py-3"
        >
          <div className="grid md:grid-cols-3 py-3">
            <div>
              <h1
                className="flex items-center gap-3 font-bold text-xl sm:text-3xl
                text-justify sm:text-left"
              >
                <img src={foooterLogo} alt="" className="max-w-[50px]" />{" "}
                FOODTIE
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                neque dolor totam provident molestiae dignissimos debitis
                deleniti id sit ipsum?
              </p>
              <br />
              <div className="flex gap-2 items-center">
                <FaLocationArrow />
                <p>Toul Kork, Kampong Thom, PP</p>
              </div>
              <div className="flex gap-2 items-center mt-2">
                <BiMobileAlt />
                <p>+855969634904</p>
              </div>
              <div className="flex gap-4 mt-5 cursor-pointer">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            <div
              className="grid grid-cols-2 sm:grid-cols-3
                col-span-2 md:pl-10"
            >
              <div>
                <div className="py-8 px-4">
                  <h1
                    className="font-bold text-xl text-justify
                            sm:text-left mb-3"
                  >
                    Important Links
                  </h1>
                  <ul className="flex gap-3 flex-col">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1
                    className="font-bold text-xl text-justify
                            sm:text-left mb-3"
                  >
                    Important Links
                  </h1>
                  <ul className="flex gap-3 flex-col">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1
                    className="font-bold text-xl text-justify
                            sm:text-left mb-3"
                  >
                    Important Links
                  </h1>
                  <ul className="flex gap-3 flex-col">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center py-10 border-t-2 border-gray-300/50">
              All rights reverved || Made with 💕 by Brostouch'K
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
