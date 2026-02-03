import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    img: "src/assets/Clothes.jpg",
    price: 980,
    old: 990,
    sale: true,
    isNew: true,
  },
  { id: 2, img: "src/assets/Clothes2.jpg", price: 980, old: 990, isNew: true },
  { id: 3, img: "src/assets/Clothes3.jpg", price: 980, old: 990, sale: true },
  { id: 4, img: "src/assets/Clothes4.jpg", price: 980, old: 990 },
  { id: 5, img: "src/assets/jacket.jpg", price: 980, old: 990 },
];

function Slide({ setCartCount }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 font-poppins">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">TOPSELLING</h1>
          <ul className="flex gap-6">
            {["Clothing", "Shoes", "Electronics", "Accessories"].map((item) => (
              <li key={item} className="hover:text-gray-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Slider {...settings}>
          {products.map((p) => (
            <div key={p.id} className="px-2">
              <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg  border-amber-300 border-2 cursor-move ">
                <div className="relative">
                  <img
                    src={p.img}
                    alt=""
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 flex gap-1">
                    {p.sale && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -30%
                      </span>
                    )}
                    {p.isNew && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-gray-500 text-sm">Category</p>
                  <h3 className="font-semibold mb-2">Product name goes here</h3>

                  <p className="font-bold text-lg">
                    ${p.price}
                    <span className="line-through text-gray-400 text-sm ml-2">
                      ${p.old}
                    </span>
                  </p>

                  <button
                    onClick={() => setCartCount((prev) => prev + 1)}
                    className="w-full bg-sky-500 text-white py-2 rounded-md
                  hover:bg-red-600 transition flex items-center justify-center cursor-pointer"
                  >
                    <i className="fa fa-shopping-cart mr-2"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-12 flex justify-center px-4">
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-white">
              Stay Updated on Our Products
            </h1>
            <p className="text-gray-300 text-sm mt-2">
              Get the latest offers and product updates instantly.
            </p>
          </div>

          {/* Search Box */}
          <div className="flex w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full md:w-64 px-4 py-3 bg-white rounded-l-xl outline-none text-gray-800 focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-r-xl font-semibold shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
