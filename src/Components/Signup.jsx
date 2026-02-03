import React from "react";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username && email && password) {
      message.textContent = "Signup successful!";
      message.style.color = "lightgreen";

      alert(`Signup successful!
Username: ${username}
Email: ${email}
Password: ${password}`);
      window.location.href = "/";
      // redirect
      // window.location.href = "/";
    } else {
      message.textContent = "Please fill in all fields.";
      message.style.color = "red";
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-10 w-[90%] max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent">
          Create Account ✨
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Join us and start shopping today
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 hover:scale-[1.02] transition transform duration-300"
          >
            Sign Up
          </button>

          
          <p id="message" className="text-center mt-3 font-semibold"></p>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
