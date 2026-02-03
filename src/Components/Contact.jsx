import React from 'react'

function Contact() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 mt-10">
      <div className="max-w-7xl mx-auto px-6 font-poppins">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Contact Us
          </h1>
          <p className="text-gray-400">
            Get in touch with us for any inquiries or support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Contact Info */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              Have questions or need assistance? Reach out to us!
            </p>
            <ul className="space-y-3 text-gray-400">
              <li>📧 Email: contact@example.com</li>
              <li>📞 Phone: +1 (555) 123 4567</li>
              <li>📍 Address: 123 Main Street, City, Country</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="">
                <i class="fa-solid fa-m px-4 py-2 rounded-md border border-gray-600 text-gray-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition hover:shadow-xl hover:shadow-sky-400"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-twitter px-4 py-2 rounded-md border border-gray-600 text-gray-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition hover:shadow-xl hover:shadow-sky-400"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram px-4 py-2 rounded-md border border-gray-600 text-gray-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition hover:shadow-xl hover:shadow-sky-400"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-telegram px-4 py-2 rounded-md border border-gray-600 text-gray-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition hover:shadow-xl hover:shadow-sky-400"></i>
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 focus:outline-none focus:ring focus:ring-pink-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 focus:outline-none focus:ring focus:ring-pink-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" rows={4} placeholder="Your Message..." className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 focus:outline-none focus:ring focus:ring-pink-500"></textarea>
              </div>
              <button type='submit' className='w-full bg-amber-950 px-[3rem] py-[.7rem] bg-gradient-to-r from-pink to-purple rounded-lg hover:bg-gradient-to-r cursor-pointer font-semibold hover:scale-105 transition-all duration-300'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact
