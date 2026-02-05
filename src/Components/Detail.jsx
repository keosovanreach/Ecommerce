import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail({ cart, setCart, setCartCount }) {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center mt-10">
        <p className="text-xl text-gray-400">No product selected</p>
        <button
          onClick={() => navigate(-1)}
          className="ml-4 px-4 py-2 bg-pink-500 rounded hover:bg-red-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {product.title}
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {product.description || "No description available."}
          </p>
          <p className="text-2xl font-semibold text-green-400 mb-6">
            {product.price}
          </p>

          <button
            onClick={() => {
              setCart((prev) => [...prev, product]);
              setCartCount((prev) => prev + 1);
            }}
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-red-600 transition flex items-center justify-center cursor-pointer"
          >
            <i className="fa fa-shopping-cart mr-2"></i>
            Add to Cart
          </button>
          <button onClick={() => navigate(-1)} className="mt-4 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-red-600 transition flex items-center justify-center cursor-pointer">
            
            Back
          </button>

        </div>
      </div>
    </div>
  );
}

export default Detail;
