import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";
import Banner from "./components/banner/Banner";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
    </div>
  );
};

export default App;
