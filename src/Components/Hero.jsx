import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo-removebg-preview (3).png";

function Hero() {
  return (
    <div className="hero w-full bg-gray-900 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-10">
        {/* Text Section */}
        <div data-aos="fade-right">
          <h1 className="italic bg-gradient-to-r from-red-400 via-blue-500 to-blue-700 bg-clip-text text-transparent font-bold text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to my Accessories Store
          </h1>

          <p className="italic text-gray-300 mt-6 text-center lg:text-left max-w-lg text-sm sm:text-base">
            Discover the latest trends in accessories with our curated
            collection. Elevate your style with our premium selection of bags,
            jewelry, and more.
          </p>

          <div className="flex justify-center lg:justify-start mt-8">
            <Link to="/shop">
              <button className="button">🛒 Buy Now</button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96">
          <img
            src={logo}
            alt="Hero Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
