import React from "react";
import Slider from "react-slick";
import { testimonialData } from "../../constant/testimonailData";

const Testimonail = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p
              className="text-sm bg-clip-text text-transparent
              bg-gradient-to-r from-primary to-secondary"
            >
              Testimonal
            </p>
            <h1 className="text-3xl font-bold">Testimonal</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
              quam! Nulla?
            </p>
          </div>
          {/* testimonail section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6 ">
                    <div
                        className="flex flex-col justify-center items-center gap-4
                        text-center rounded-xl shadow-md mx-4 p-4 dark:bg-gray-800
                        bg-primary/10 relative"
                    >
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <p className="text-sm text-gray-500">{text}</p>
                      <h1 className="font-bold text-xl">{name}</h1>
                      <p
                        className="text-black/20 text-9xl font-serif absolute
                        top-0 right-0"
                      >,,</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonail;
