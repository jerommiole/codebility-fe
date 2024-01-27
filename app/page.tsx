'use client'
import { useState, useEffect } from "react";
import Hero from "./Hero/Hero";
import WhyJoinUs from "./WhyJoinUs/page";
import About from "./Services/About";
import Codevs from "./codevs/page";
import Footer from "../Components/Footer";
import ServicesSection2 from "./Services/ServicesSection2";
import Loader from "../Components/loader";
import Navbar from "./Hero/Navbar";
export default function Web() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
     
      setTimeout(async () => {
        setIsLoading(false);
      }, 2000);
    };

    
    fetchData();
  }, []); 

  return (
    <div className="relative flex flex-col w-full h-screen overflow-x-hidden bg-black">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen gap-10 ">
          <Loader />
          <div className="flex items-center justify-center gap-5">
          <div>Please Wait</div>
          <div className="translate-y-1 dots"></div>
          </div>
        </div>
      ) : (
        <>
        <div className="sticky top-0 z-50">
        <Navbar/>
        </div>
          <Hero />
          <About />
          <Codevs />
          <ServicesSection2 />
          <WhyJoinUs />
          <Footer />
        </>
      )}
    </div>
  );
}
