import React from "react";
import Navbar from "./components/Navbar"; // if separated
import  ProductGrid  from "./components/Products";
import VendorList from "./components/Vendors";
import FeaturedCarousel from "./components/FeaturedCarousel";

export default function ChopLifeHeroPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Section */}
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
          <button className="bg-white text-purple-800 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
            Explore Menu
          </button>
        </div>
      </header>

      {/* Carousel */}
      <FeaturedCarousel />

      {/* Products */}
      <ProductGrid />

      {/* Vendors */}
      <VendorList />

      {/* Footer */}
      <footer className="bg-purple-900 text-white px-6 py-10 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-3">ChopLife</h2>
            <p className="text-sm">
              Bringing people together through the art of food. Bold flavors,
              unforgettable taste.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Menu</li>
              <li>Events</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <ul className="space-y-2 text-sm">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-300">
          &copy; {new Date().getFullYear()} ChopLife. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
