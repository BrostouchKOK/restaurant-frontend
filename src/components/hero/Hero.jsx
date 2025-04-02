import React, { useState } from "react";
import food1 from "../../assets/hero/hero1.png";
import food2 from "../../assets/hero/hero2.png";
import food3 from "../../assets/hero/hero3.png";
import { bgImage, imageList } from "../../constant/imageList";

const Hero = () => {
  const [imageId, setImageId] = useState(food1);
  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-900
        dark:text-white duration-200 flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center order-2 sm:order-1
                gap-4 pt-12 sm:pt-0 text-center sm:text-left"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to Foodtie Zone
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, totam. Dignissimos est rerum enim cumque repellat
                assumenda illo consectetur ex!
              </p>
              <div>
                <button
                  className="py-1 px-4 bg-gradient-to-r from-primary
                    to-secondary text-white rounded-full hover:scale-105 duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* imgage section */}
            <div
              className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px]
                flex items-center justify-center relative"
            >
              {/* main image section */}
              <div
                className="flex items-center justify-center h-[300px]
                sm:h-[450px] overflow-hidden"
              >
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt=""
                  className="w-[300px] sm:w-[450px] mx-auto spin"
                />
              </div>
              {/* image list section */}
              <div
                className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2
                lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10
                bg-white/30 rounded-full"
              >
                {imageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    data-aos-once="true"
                    key={item.id}
                    src={item.img}
                    className="max-w-[80px] h-[80px] object-cover hover:scale-105
                      duration-200 order-2 sm:order-1 cursor-pointer"
                    onClick={() => {
                      setImageId(
                        item.id == 1 ? food1 : item.id == 2 ? food2 : food3
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
