import React, { useState, useEffect } from "react";

const dishes = [
  {
    name: "Jollof Fiesta",
    image: "https://www.vyskcatering.co.uk/images/home-section-2-img1.png",
    description: "Smoky jollof rice with grilled chicken and plantains.",
  },
  {
    name: "Suya Supreme",
    image: "https://www.vyskcatering.co.uk/images/home-section-2-img2.png",
    description: "Spicy beef skewers with onions and pepper sauce.",
  },
  {
    name: "Pounded Yam Elegance",
    image: "https://www.vyskcatering.co.uk/images/home-section-2-img3.png",
    description: "Served with rich egusi soup and assorted meats.",
  },
];

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dishes.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentDish = dishes[currentIndex];

  return (
    <section className="relative bg-white py-16 px-6 text-center overflow-hidden">
      <h2 className="text-3xl font-bold text-purple-800 mb-6">Featured Dish</h2>
      <div className="max-w-xl mx-auto relative">
        <div className="transition-opacity duration-1000 ease-in-out">
          <img
            src={currentDish.image}
            alt={currentDish.name}
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 rounded-b-xl">
            <h3 className="text-xl font-semibold">{currentDish.name}</h3>
            <p className="text-sm mt-2">{currentDish.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
