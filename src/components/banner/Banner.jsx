import React from "react";
import food3 from "../../assets/hero/hero3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] pb-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* image section */}
            <div>
              <img
                src={food3}
                alt=""
                className="max-w-[430] w-full mx-auto 
                    drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"
              />
            </div>
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl  sm:text-4xl font-bold">
                Lorem, ipsum dolor.
              </h1>
              <p className="text-gray-500 text-sm tracking-wide leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                in repudiandae neque quam sunt adipisci ipsum nesciunt aut
                eveniet voluptates? Eos error,
                <br />
                <br />
                doloremque doloribus sit sint necessitatibus sed aliquid
                voluptatibus consequatur esse fuga ratione molestias molestiae
                officia magni blanditiis natus quas ipsam dolor alias!
                Distinctio assumenda facere hic quidem ut?
              </p>
              <div className="flex gap-5">
                <div>
                  <GrSecure
                    className="rounded-full w-20 h-20 text-4xl bg-violet-300
                        dark:bg-violet-500 p-5 shadow-sm"
                  />
                </div>
                <div>
                  <IoFastFood
                    className="rounded-full w-20 h-20 text-4xl bg-orange-300
                        dark:bg-orange-500 p-5 shadow-sm"
                  />
                </div>
                <div>
                  <GiFoodTruck
                    className="rounded-full w-20 h-20 text-4xl bg-green-300
                        dark:bg-green-500 p-5 shadow-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  className="bg-gradient-to-r from-primary to-secondary rounded-full
                    px-4 py-3 text-white hover:scale-105 duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
