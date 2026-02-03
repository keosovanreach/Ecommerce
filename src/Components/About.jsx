import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 mt-10">
      <div className="max-w-7xl mx-auto px-6 font-poppins">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            About the Developer
          </h1>
          <p className="text-gray-400">
            Building modern web experiences with passion 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-2xl font-bold">
                KR
              </div>
              <div>
                <h2 className="text-2xl font-semibold">KEO SOVANREACH</h2>
                <p className="text-gray-400">Frontend Developer</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              I am a passionate web developer specializing in building fast,
              responsive, and visually engaging applications using modern
              technologies like React, Tailwind CSS, and JavaScript. I love
              transforming ideas into beautiful digital products.
            </p>

            <div className="flex gap-4">
              <a href="#" className="hover:text-pink-400 transition">
                <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="hover:text-sky-400 transition">
                <i className="fa-brands fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-pink-400 transition">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="hover:text-pink-400 transition">
                <i className="fa-brands fa-facebook text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Right - Skills */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>

            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Node.js",
                "Git",
                "Vite",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-800
                  text-sm border border-white/10 hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Project Focus</h4>
              <p className="text-gray-400">
                E-commerce systems, dashboards, POS systems, landing pages, and
                modern UI/UX design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
