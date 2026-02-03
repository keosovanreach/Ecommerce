import React from "react";
import { Link } from "react-router-dom";

function Card({ cart, setCart }) {
  const updateQty = (index, delta) => {
    const newCart = [...cart];
    newCart[index].qty = (newCart[index].qty || 1) + delta;

    if (newCart[index].qty <= 0) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * (item.qty || 1);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Cart</h2>
          <Link to="/" className="text-xl">
            ✕
          </Link>
        </div>

        {/* Items */}
        {cart.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 object-cover rounded"
              />

              <div>
                <h3 className="font-semibold">{product.title}</h3>

                <div className="flex items-center mt-2 border rounded overflow-hidden w-24">
                  <button
                    onClick={() => updateQty(index, -1)}
                    className="w-8 h-8 hover:bg-gray-200"
                  >
                    −
                  </button>

                  <span className="flex-1 text-center">{product.qty || 1}</span>

                  <button
                    onClick={() => updateQty(index, 1)}
                    className="w-8 h-8 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-semibold">{product.price}</span>

              <button
                onClick={() => removeItem(index)}
                className="text-xl hover:text-red-600"
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        {/* Subtotal */}
        <div className="flex justify-between text-lg font-semibold mt-6">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
          <Link to="/shop" className="flex-1">
            <button
              className="w-full bg-gradient-to-r from-red-500 to-red-600 
                 text-white py-3 rounded-xl font-semibold
                 hover:from-red-600 hover:to-red-700
                 transition duration-300 shadow-lg hover:shadow-xl
                 active:scale-95 cursor-pointer"
            >
              🛒 Shop More
            </button>
          </Link>

          <Link to="/checkout" className="flex-1">
            <button
              className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 
                 text-black py-3 rounded-xl font-semibold
                 hover:from-amber-500 hover:to-yellow-400
                 transition duration-300 shadow-lg hover:shadow-xl
                 active:scale-95 cursor-pointer"
            >
              💳 Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
