import React from "react";


function HotDealBanner() {
  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
        
        <div className="flex justify-center lg:justify-start">
          <img
            src='src/assets/cloth5-removebg-preview.png'
            alt="Laptop"
            className="w-[200px] sm:w-[260px] md:w-[320px] object-contain"
          />
        </div>

      
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-3 sm:gap-4">
            {[
              { value: "02", label: "DAYS" },
              { value: "10", label: "HOURS" },
              { value: "34", label: "MINS" },
              { value: "60", label: "SECS" },
            ].map((item, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 text-white flex flex-col items-center justify-center"
              >
                <span className="text-lg sm:text-xl font-bold">
                  {item.value}
                </span>
                <span className="text-[10px] sm:text-xs">{item.label}</span>
              </div>
            ))}
          </div>

          
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              HOT DEAL THIS WEEK
            </h2>
            <p className="text-gray-600 mt-2">NEW COLLECTION UP TO 50% OFF</p>
          </div>

        
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition">
            SHOP NOW
          </button>
        </div>

        
        <div className="flex justify-center lg:justify-end">
          <img
            src='src/assets/9a10e9f8f8f737803ab107fb730741d8-removebg-preview.png'
            alt="Headphone"
            className="w-[200px] sm:w-[260px] md:w-[320px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HotDealBanner;
