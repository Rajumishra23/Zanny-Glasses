import React from "react";

const products = [
  {
    title: "Vintage Gold Wristwatch",
    brand: "",
    image: "new1.png",
    price: "₹16,445.00",
    oldPrice: "₹18,272.00",
    discount: "-10%",
  },
  {
    title: "Heritage Automatic Watch",
    brand: "",
    image: "New2.png",
    price: "₹7,482.00",
    oldPrice: null,
    discount: null,
  },
  {
    title: "Patek Philippe Nautilus",
    brand: "",
    image: "New3.png",
    price: "₹6,787.00",
    oldPrice: null,
    discount: null,
  },
  {
    title: "Audemars Piguet Royal",
    brand: "",
    image: "New5.png",
    price: "₹11,224.00",
    oldPrice: null,
    discount: null,
  },
];

const NewArrival = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-12">
          New Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div key={index} className="relative group">
              {/* Wishlist Icon */}
              <button className="absolute top-4 right-4 z-10 text-gray-400 hover:text-red-400 transition">
                ♥
              </button>

              {/* Brand Vertical */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[-90deg] text-xs tracking-wide text-gray-500">
                {item.brand}
              </div>

              {/* Product Image */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Discount Badge */}
              {item.discount && (
                <span className="absolute bottom-4 right-4 bg-black text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}

              {/* Product Info */}
              <div className="mt-4 space-y-1 text-center">
                <h3 className="text-sm text-gray-800">{item.title}</h3>
                <div className="text-sm text-gray-600 flex justify-center gap-2">
                  {item.oldPrice && (
                    <span className="line-through">{item.oldPrice}</span>
                  )}
                  <span className="font-semibold text-black">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;