import React from "react";

function Category() {
  return (
    <div className="category w-full min-h-[500px] bg-gray-900 text-white">
      <div
        data-aos="flip-up"
        className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-20 px-6 py-16"
      >
        <div
          className=" relative bg-amber-50 rounded-lg shadow-lg overflow-hidden 
                        w-[450px] h-[400px] sm:w-[450px] sm:h-[400px]
                        lg:w-[400px] lg:h-[400px] xl:w-[350px] xl:h-[350px]
                        hover:scale-105 transition-transform duration-300"
        >
          {/* Image */}
          <img
            src="src/assets/afbebf53fc5ecd6e6c1780498c387fe1-removebg-preview.png"
            alt="Laptop"
            className="absolute right-0 bottom-0 w-3/4 h-3/4 object-contain z-0"
          />

          {/* Red diagonal overlay */}
          <div className="absolute inset-0 bg-red-600 opacity-95 z-10 clip-diagonal" />

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-center px-6 text-white">
            <h1 className="text-2xl xl:text-3xl font-bold leading-tight">
              Laptop <br /> Collection
            </h1>

            <button className="mt-4 inline-flex items-center gap-2 font-semibold tracking-wide hover:underline">
              SHOP NOW
              <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                ➜
              </span>
            </button>
          </div>
        </div>

        <div
          className="relative bg-amber-50 rounded-lg shadow-lg overflow-hidden 
          w-[450px] h-[400px] sm:w-[450px] sm:h-[400px]
          lg:w-[450px] lg:h-[400px] xl:w-[350px] xl:h-[350px]
          hover:scale-105 transition-transform duration-300"
        >
          {/* Image */}
          <img
            src="src/assets/dd5783343ba38af65d1a96644d7246c2-removebg-preview.png"
            alt="Laptop"
            className="absolute right-0 bottom-0 w-3/4 h-3/4 object-contain z-0"
          />

          {/* Red diagonal overlay */}
          <div className="absolute inset-0 bg-red-600 opacity-95 z-10 clip-diagonal" />

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-center px-6 text-white">
            <h1 className="text-2xl xl:text-3xl font-bold leading-tight">
              Laptop <br /> Collection
            </h1>

            <button className="mt-4 inline-flex items-center gap-2 font-semibold tracking-wide hover:underline">
              SHOP NOW
              <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                ➜
              </span>
            </button>
          </div>
        </div>
        <div
          className="relative bg-amber-50 rounded-lg shadow-lg overflow-hidden 
                      w-[450px] h-[400px] sm:w-[450px] sm:h-[400px]
                        lg:w-[450px] lg:h-[400px] xl:w-[350px] xl:h-[350px]
                        hover:scale-105 transition-transform duration-300"
        >
          {/* Image */}
          <img
            src="src/assets/9a10e9f8f8f737803ab107fb730741d8-removebg-preview.png"
            alt="Laptop"
            className="absolute right-0 bottom-0 w-3/4 h-3/4 object-contain z-0"
          />

          {/* Red diagonal overlay */}
          <div className="absolute inset-0 bg-red-600 opacity-95 z-10 clip-diagonal" />

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-center px-6 text-white">
            <h1 className="text-2xl xl:text-3xl font-bold leading-tight">
              Laptop <br /> Collection
            </h1>

            <button className="mt-4 inline-flex items-center gap-2 font-semibold tracking-wide hover:underline">
              SHOP NOW
              <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                ➜
              </span>
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
          .clip-diagonal {
            clip-path: polygon(0 0, 65% 0, 45% 100%, 0% 100%);
          }
        `}
      </style>
    </div>
  );
}

export default Category;
