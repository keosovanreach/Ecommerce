import { useState } from "react";
import { Link } from "react-router-dom";

import ace1 from "../assets/Ace1.jpg";
import ace2 from "../assets/Ace2.jpg";
import ace3 from "../assets/Ace3.jpg";
import ace4 from "../assets/Ace4.jpg";
import ace5 from "../assets/Ace5.jpg";
import ace6 from "../assets/Ace6.jpg";
import ace7 from "../assets/Ace7.jpg";
import ace8 from "../assets/Ace8.jpg";
import ace9 from "../assets/Ace9.jpg";
import ace10 from "../assets/Ace10.jpg";
import ace11 from "../assets/Ace11.jpg";
import ace12 from "../assets/Ace12.jpg";

function Accessories({ setCart, setCartCount }) {
  const prices = [
    "$12",
    "$14",
    "$99",
    "$17",
    "$89",
    "$12",
    "$13",
    "$10",
    "$15",
    "$19",
    "$12",
    "$10",
  ];

  const titles = [
    
    "Glasses",
    "Headphone",
    "Cap",
    "Bracelet",
    "Watch",
    "Sunglasses",
    "Belt",
    "Necklace",
    "Earrings",
    "Ring",
    "Scarf",
    "Wallet",
  ];

  const images = [

    ace1,
    ace2,
    ace3,
    ace4,
    ace5,
    ace6,
    ace7,
    ace8,
    ace9,
    ace10,
    ace11,
    ace12,
 
  ];

  const categories = [
    "Accessories",
    "Accessories",
    "Accessories",
    "Accessories",
    "Accessories",
    "Accessories",
    "Accessories",
    "Accessories",
    "Accessories",
    "Accessories",
    "Accessories",
    "Accessories",
    
  ];

  const products = Array.from({ length: 12 }, (_, index) => ({
    title: titles[index],
    category: categories[index], // ✅ fixed
    price: prices[index],
    image: images[index],
  }));

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between font-poppins mt-4 ">
        <h1 className="text-4xl font-bold text-center mb-8 text-white mt-20">
          PRODUCTS
        </h1>

        <ul className="flex flex-wrap justify-center gap-4 mt-20  mb-6 md:mb-0">
          {[
            { name: "All", path: "/" },
            { name: "Women", path: "/women" },
            { name: "Men", path: "/men" },
            { name: "Kids", path: "/kids" },
            { name: "Accessories", path: "/accessories" },
          ].map((item) => (
            <li key={item.name}>
              <Link to={item.path}>
                <button className="hover:text-pink-400 transition duration-200 cursor-pointer">
                  {item.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 pb-20">
        {products.map((product, index) => (
          <Link to="/detail" state={{ product }}>
            <div
              key={index}
              className="group relative h-[380px] rounded-2xl overflow-hidden
              bg-white/5 backdrop-blur-lg border border-white/10
              hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {/* Category badge */}
              <span
                className="absolute top-3 left-3 z-20 bg-gradient-to-r from-pink-500 to-red-500
              text-xs px-3 py-1 rounded-full font-semibold"
              >
                {product.category}
              </span>

              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover
                group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>

              {/* Info */}
              <div className="absolute bottom-0 w-full p-4 z-10">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-pink-400 font-bold">{product.price}</p>

                <button
                  onClick={() => {
                    setCart((prev) => [...prev, product]);
                    setCartCount((prev) => prev + 1);
                  }}
                  className="mt-3 w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500
                  hover:from-red-500 hover:to-pink-500 transition font-medium
                  opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 duration-300 cursor-pointer"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Accessories;
