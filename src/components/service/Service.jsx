import React from "react";
import { serviceData } from "../../constant/serviceData";

const Service = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div data-aos="fade-up" className="text-center mb-20 max-w-[400px] mx-auto">
            <p
              className="text-sm bg-clip-text text-transparent
              bg-gradient-to-r from-primary to-secondary"
            >
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              reiciendis rem culpa voluptatum, inventore quisquam vel similique
              eaque architecto rerum.
            </p>
          </div>
          {/* card section */}
          <div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14
               place-items-center"
            >
              {serviceData.map(({ id, name, img, description }) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration = "300"
                    key={id}
                    className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800
                    hover:bg-primary hover:text-white duration-300 p-4 shadow-xl"
                  >
                    <div className="h-[100px]">
                      <img
                        src={img}
                        alt=""
                        className="max-w-[200px] mx-auto block transform -translate-y-14
                      group-hover:scale-105 group-hover:rotate-6 duration-300"
                      />
                    </div>
                    <div className="text-center p-4">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm line-clamp-2 group group-hover:text-white">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
