import React, { useState, useEffect } from "react";

const banners = [
  {
    image: "watch.png",
    title: "Audemars Piguet Royal Oak Collection",
    desc: "Finely finished mechanical movements with avant-garde style.",
    navColor: "#1a1a1a",
  },
  {
    image: "watch1.png",
    title: "Rolex Submariner Series",
    desc: "Dive into precision with timeless craftsmanship.",
    navColor: "#0f172a",
  },
  {
    image: "watch2.png",
    title: "Omega Speedmaster",
    desc: "The watch that went to the moon — now on your wrist.",
    navColor: "#2c2c2c",
  },
  {
    image: "header3.png",
    title: "Tag Heuer Carrera",
    desc: "Racing-inspired design meets Swiss engineering.",
    navColor: "#3b3b3b",
  },
];

const Header = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden text-white">
      {/* Background Images */}
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner.image}
          alt={banner.title}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex items-center h-full px-4 sm:px-8 md:px-12">
        <div className="max-w-xl space-y-6 text-left transition-opacity duration-1000">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {banners[current].title}
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            {banners[current].desc}
          </p>
          <a
            href="#"
            className="inline-block border border-white text-white font-medium px-5 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Header;