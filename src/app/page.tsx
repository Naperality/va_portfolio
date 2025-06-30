'use client';

import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

export default function Home() {
  return (
    <main className="bg-white text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section id="about" className="pt-24 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/agnes.jpg" // replace with your own local or hosted image
            alt="Agnes Ann"
            width={400}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-4xl font-extrabold text-blue-800">Agnes Ann</h2>
            <h3 className="text-xl text-gray-600">Bookkeeper Virtual Assistant</h3>
            <p className="italic text-gray-500">"Your Financial Organizer"</p>
            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-600 transition"
            >
              Work With Me
            </a>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {/* Replace links */}
              <a href="#" className="text-blue-700 hover:text-blue-500">
                <i className="fab fa-facebook text-xl" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400">
                <i className="fab fa-instagram text-xl" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-400">
                <i className="fab fa-linkedin text-xl" />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                <i className="fab fa-github text-xl" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Services</h2>
        <ul className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700">
          <li>📊 Bookkeeping using QuickBooks, Xero, or Excel</li>
          <li>🗂️ Monthly financial reports & reconciliations</li>
          <li>📆 Calendar, email & admin management</li>
          <li>🧾 Invoice tracking & data entry</li>
          <li>💼 Client communication & VA support</li>
        </ul>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Portfolio</h2>
        <p className="text-gray-600 mb-4">Examples of previous work or mockup projects.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Add screenshots or placeholders */}
          <div className="bg-white p-4 shadow rounded">Project 1</div>
          <div className="bg-white p-4 shadow rounded">Project 2</div>
          <div className="bg-white p-4 shadow rounded">Project 3</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact</h2>
        <p className="text-gray-700 mb-4">Let’s work together! Reach out through email or schedule a quick consultation.</p>
        <a
          href="mailto:agnes@example.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition"
        >
          Email Me
        </a>
      </section>
    </main>
  );
}
