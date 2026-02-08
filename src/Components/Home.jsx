import { useState } from "react";
import { Link } from "react-router-dom";

function Home({ cartCount }) {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },  
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center h-[80px] bg-gray-800 px-6 lg:px-20 fixed top-0 w-full z-50">
        <div className="flex items-center space-x-2">
          <i className="fa-solid fa-bag-shopping text-pink-400 text-3xl"></i>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Ecommerce
          </h1>
        </div>

        <div className="hidden lg:flex items-center max-w-md w-full mx-6 border border-gray-500 rounded-md">
          <input
            type="text"
            placeholder="Search Products..."
            className="flex-grow px-4 py-2 rounded-l-md outline-none text-white bg-gray-700"
          />
          <button className="bg-sky-500 px-4 py-2 rounded-r-md text-white hover:bg-sky-600 transition">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-white">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:text-blue-400 transition transform hover:scale-110"
              >
                <Link to={item.path} className="block">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex space-x-4 text-white">
            <li className="relative cursor-pointer hover:text-blue-400 transform hover:scale-110 transition">
              <div className="relative cursor-pointer">
                <Link to="/card" onClick={() => setOpen(false)}>
                  <i className="fa fa-shopping-cart text-2xl"></i>
                </Link>

                {cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs
            w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    {cartCount}
                  </span>
                )}
              </div>
            </li>
            <Link link to="/login">
              <li className="cursor-pointer hover:text-blue-400 transform hover:scale-110 transition">
                <i className="fa fa-user  text-2xl"></i>
              </li>
            </Link>
          </ul>
        </div>
        <button
          className="md:hidden text-white text-3xl focus:outline-none cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-700 text-white px-6 py-6 space-y-4 mt-[80px] fixed w-full z-40 ">
          {menuItems.map((item) => (
            <p
              key={item.name}
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => setOpen(false)}
            >
              <Link to={item.path} className="block">
                {item.name}
              </Link>
            </p>
          ))}
          <ul className="flex space-x-4 text-white">
            <li className="relative cursor-pointer hover:text-blue-400 transform hover:scale-110 transition">
              <div className="relative cursor-pointer">
                <Link to="/card" onClick={() => setOpen(false)}>
                  <i className="fa fa-shopping-cart text-2xl"></i>
                </Link>

                {cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs
            w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    {cartCount}
                  </span>
                )}
              </div>
            </li>
            <Link to="/login" onClick={() => setOpen(false)}>
              <li className="cursor-pointer hover:text-blue-400 transform hover:scale-110 transition">
                <i className="fa fa-user  text-2xl"></i>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
