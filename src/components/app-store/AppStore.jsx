import React from "react";
import playStoreImg from "../../assets/website/play_store.png";
import appStoreImg from "../../assets/website/app_store.png";
import moblieBike from "../../assets/website/mobile_bike.gif";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-end gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              <h1
                className="text-2xl text-center sm:text-left sm:text-4xl font-semibold
                  dark:text-gray-400 text-gray-700"
              >
                Foodly is Available for Android and IOS
              </h1>
              <div className="flex flex-wrap justify-center items-center sm:justify-start">
                <a href="#">
                  <img
                    src={playStoreImg}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={appStoreImg}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div className="">
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                src={moblieBike}
                alt=""
                className="max-w-[300px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
