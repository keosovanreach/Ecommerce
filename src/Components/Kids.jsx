import { useState } from "react";
import { Link } from "react-router-dom";

import kid1 from "../assets/kid1.jpg";
import kid2 from "../assets/kid2.jpg";
import kid3 from "../assets/kid3.jpg";
import kid4 from "../assets/kid4.jpg";
import kid5 from "../assets/kid5.jpg";
import kid6 from "../assets/kid6.jpg";
import kid7 from "../assets/kid7.jpg";
import kid8 from "../assets/kid8.jpg";
import kid9 from "../assets/kid9.jpg";
import kid10 from "../assets/kid10.jpg";
import kid11 from "../assets/kid11.jpg";
import kid12 from "../assets/kid12.jpg";


function Kids({ setCart, setCartCount }) {
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

    "Kids Outfit",
    "Kids Outfit",
    "Kids Outfit",
    "Kids Outfit",
    "Kids Outfit",
    "Kids Outfit",
    "Kids Outfit",
    "Kids Outfit",
    "Kids Outfit",
    "Kids Outfit",
    "Kids Outfit",
    "Kids Outfit",
  ];

  const images = [
    kid1,
    kid2,
    kid3,
    kid4,
    kid5,
    kid6,
    kid7,
    kid8,
    kid9,
    kid10,
    kid11,
    kid12,
    
  ];

  const categories = [
    "Kids",
    "Kids",
    "Kids",
    "Kids",
    "Kids",
    "Kids",
    "Kids",
    "Kids",
    "Kids",
    "Kids",
    "Kids",
    "Kids",
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

export default Kids;
