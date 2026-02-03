import { useState } from "react";
import { Link } from "react-router-dom";

import clothImg1 from "../assets/Clothes.jpg";
import clothImg2 from "../assets/Clothes2.jpg";
import clothImg3 from "../assets/Clothes3.jpg";
import clothImg4 from "../assets/Clothes4.jpg";
import clothes5 from "../assets/Clothes5.jpg";
import clothes6 from "../assets/Clothes6.jpg";
import clothes7 from "../assets/Clothes7.jpg";
import clothes8 from "../assets/Clothes8.jpg";
import kid1 from "../assets/kid1.jpg";
import kid2 from "../assets/kid2.jpg";
import kid3 from "../assets/kid3.jpg";
import kid4 from "../assets/kid4.jpg";
import ace1 from "../assets/Ace1.jpg";
import ace2 from "../assets/Ace2.jpg";
import ace3 from "../assets/Ace3.jpg";
import ace4 from "../assets/Ace4.jpg";

function Products({ cart, setCart, setCartCount }) {
  const prices = [
    "$12",
    "$14",
    "$99",
    "$17",
    "$19",
    "$12",
    "$13",
    "$10",
    "$15",
    "$19",
    "$12",
    "$10",
    "$29",
    "$34",
    "$39",
    "$27",
  ];

  const titles = [
    "Justyle Jacket",
    "Leather Jacket",
    "Casual Shirt",
    "Elegant Dress",
    "Comfortable",
    "Comfortable",
    "Comfortable",
    "Cozy Sweater",
    "Hoodie",
    " Trendy Sneakers",
    "Formal Blazer",
    "Baby T-shirt",
    "Glasses",
    "Cap",
    "Bracelet",
  ];

  const images = [
    clothes5,
    clothes6,
    clothes7,
    clothes8,
    clothImg1,
    clothImg2,
    clothImg3,
    clothImg4,
    kid1,
    kid2,
    kid3,
    kid4,
    ace1,
    ace2,
    ace3,
    ace4,
  ];

  const Cates = [
    "Women",
    "Women",
    "Women",
    "Women",
    "Men",
    "Men",
    "Men",
    "Men",
    "Kids",
    "Kids",
    "Kids",
    "Kids",
    "Accessorie",
    "Accessorie",
    "Accessorie",
    "Accessorie",
  ];

  const products = Array.from({ length: 16 }, (_, index) => ({
    title: titles[index],
    category: Cates[index],
    price: prices[index],
    image: images[index],
  }));

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between font-poppins">
        <h1 className="text-4xl font-bold text-center mb-8 text-white ">
          PRODUCTS
        </h1>

        <ul className="flex flex-wrap justify-center gap-4 ">
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 py-16">
        {products.map((product, index) => (
          <div
            data-aos="zoom-in-up"
            key={index}
            className="relative rounded-xl shadow-xl overflow-hidden border-amber-300 border-2
            h-[350px] hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
              {product.category}
            </span>
            <Link to="/detail" state={{ product }}>
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover
              transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Link>

            <div className="absolute bottom-0 w-full bg-white p-4 space-y-2 z-10">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h2>

              <p className="text-gray-800 font-bold">{product.price}</p>

              <button
                onClick={() => {
                  setCart((prev) => [...prev, product]);
                  setCartCount((prev) => prev + 1);
                }}
                className="w-full bg-pink-500 text-white py-2 rounded-md
                hover:bg-red-600 transition flex items-center justify-center cursor-pointer"
              >
                <i className="fa fa-shopping-cart mr-2"></i>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
