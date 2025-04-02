import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";
import Banner from "./components/banner/Banner";
import AppStore from "./components/app-store/AppStore";
import Testimonail from "./components/testimonail/Testimonail";
import Footer from "./components/footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[]);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <AppStore />
      <Testimonail />
      <Footer />
    </div>
  );
};

export default App;
