import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 font-poppins">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold mb-4 relative after:block after:w-10 after:h-1 after:bg-sky-500 after:mt-2">
              About Us
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              We are committed to providing the best products and services to
              our customers. Our mission is to enhance your shopping experience
              with quality and affordability.
            </p>
          </div>
          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4 relative after:block after:w-10 after:h-1 after:bg-sky-500 after:mt-2">
              Contact Us
            </h2>
            <ul className="space-y-2 text-sm text-gray-400 cursor-pointer ">
              <li>📧 Coc80076@gmail.com</li>
              <li>📞 +855 772 634 81</li>
              <li>📍 12000 St, Phnom Penh, Cambodia</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-xl font-semibold mb-4 relative after:block after:w-10 after:h-1 after:bg-sky-500 after:mt-2">
              Follow Us
            </h2>
            <div className="flex space-x-4 mt-3">
              {/* {["Facebook", "Twitter", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-4 py-2 rounded-md border border-gray-600 text-gray-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition"
                >
                  {social}
                </a>
              ))} */}
              <a href="#">
                <i classname="fa-brands fa-facebook px-4 py-2 rounded-md border border-gray-600 text-gray-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition hover:shadow-xl hover:shadow-sky-400"></i>
              </a>
              <a href="#">
                <i classname="fa-brands fa-twitter px-4 py-2 rounded-md border border-gray-600 text-gray-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition hover:shadow-xl hover:shadow-sky-400"></i>
              </a>
              <a href="#">
                <i classname="fa-brands fa-telegram px-4 py-2 rounded-md border border-gray-600 text-gray-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition hover:shadow-xl hover:shadow-sky-400"></i>
              </a>
              <a href="#">
                <i classname="fa-brands fa-instagram px-4 py-2 rounded-md border border-gray-600 text-gray-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition hover:shadow-xl hover:shadow-sky-400"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} YourStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
