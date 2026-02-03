import React from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 mt-10">
        Secure Checkout
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Info */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Billing Information</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500"
              required
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-red-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-bold text-lg transition"
            >
              Complete Purchase
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 h-fit">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          {cart.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-700 pb-4"
                >
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQty(index, -1)}
                        className="px-2 bg-gray-700 rounded"
                      >
                        −
                      </button>
                      <span>{item.qty || 1}</span>
                      <button
                        onClick={() => updateQty(index, 1)}
                        className="px-2 bg-gray-700 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p>{item.price}</p>
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 text-sm mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between pt-6 text-xl font-extrabold">
                <span>Subtotal</span>
                <span className="text-red-500">${subtotal.toFixed(2)}</span>
              </div>

              <a
                href={`https://link.payway.com.kh/aba?id=EB2717207E25&dynamic=true&source_caller=sdk&pid=af_app_invites&link_action=abaqr&shortlink=60oajmze&amount=${subtotal.toFixed(2)}&af_from_app=true&acc=005036627&af_siteid=968860649&userid=EB2717207E25&code=420400&c=abaqr&af_referrer_uid=1741003022679-5382451`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-red-600 hover:bg-red-700 py-3 rounded-xl font-bold text-lg transition"
              >
                Pay with ABA
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
