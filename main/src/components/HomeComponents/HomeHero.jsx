import React from "react";
import Navbar from "../Navbar";
import FeaturedCarousel from "../FeaturedCarousel";
import ProductGrid from "../Products";
import VendorList from "../VendorComponents/Vendors";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
    const Navigate=useNavigate();
  return (
    <>
      <Navbar />
      <header className="relative min-h-screen flex items-center justify-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d2kn6qalgdko8e.cloudfront.net/production/public/young_friends.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-purple-800/60 to-orange-900/50 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-4xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Taste the Culture. <br /> Live the Flavor.
          </h1>
          <p className="text-lg md:text-xl font-light">
            At ChopLife, we serve more than meals — we serve moments.
          </p>
          <button onClick={()=>(Navigate("/menu"))} className="bg-white text-purple-800 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
            Explore Menu
          </button>
        </div>
      </header>
      <FeaturedCarousel />
      <ProductGrid />
      <VendorList />
      <Footer />
    </>
  );
};

export default HomeHero;
