import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username && email && password) {
      message.textContent = "Login successful!";
      message.style.color = "lightgreen";
      
      alert(`Login successful!
  Username: ${username}
  Email: ${email}
  Password: ${password}`);
  window.location.href= "/";

    } else {
      message.textContent = "Please fill in all fields.";
      message.style.color = "red-600";
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div
        className="login bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800
                   p-10 rounded-lg shadow-lg
                   w-[350px] sm:w-[640px] md:w-[768px] xl:w-[900px]
                   h-[450px] sm:h-[500px] md:h-[600px] xl:h-[530px]
                   flex flex-col items-center justify-center"
      >
        <h1 className="italic text-2xl sm:text-2xl md:text-2xl xl:text-3xl font-extralight text-white text-center">
          Login Page
        </h1>

        <form
          oncSubmit={handleSubmit}
          className="mt-4 w-full max-w-md flex flex-col space-y-4"
        >
          <div>
            <label className="block text-white mb-2" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />
          </div>
          <div>
            <label className="block text-white mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />
          </div>
          <div>
            <label className="block text-white mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />
          </div>
          <input
            type="button"
            onClick={handleSubmit}
            value="Login"
            className="bg-blue-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          />
        </form>

        <p
          id="message"
          className=" texr-center text-base sm:text-lg md:text-xl "
        ></p>

        <p className="mt-1 text-white text-center text-base sm:text-lg md:text-xl">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-amber-400 hover:text-amber-200 font-semibold"
          >
            Sign Up
          </a>
        </p>
        <div className="grid grid-cols-4 space-x-4 mt-2 md:text-2xl sm:text-xl text-lg">
          <a href="/">
            <i class="fa-brands fa-facebook text-blue-600 hover:text-red-600 transform hover:scale-110"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-telegram text-blue-300 hover:text-red-600 transform hover:scale-110"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-instagram text-red-600  hover:text-green-600 transform hover:scale-110 "></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-twitter  text-blue-600 hover:text-red-600 transform hover:scale-110"></i>
          </a>
        </div>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="script.js"></script>
      </div>
    </div>
  );
}

export default Login;
