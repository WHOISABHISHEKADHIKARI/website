import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 sm:px-14 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={assets.brand_img}
            alt="Delta Engineering Logo"
            className="w-24 h-auto mb-4"
          />
          <h3 className="text-xl font-bold text-blue-400">Delta Engineering</h3>
          <p className="text-sm mt-2">
            Powering Projects, Fueling Success since 2015.
          </p>
        </div>

        {/* Best Services Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-blue-300 mb-4">Our Best Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link to="/automation">Automation Solutions</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link to="/consulting">Expert Consulting</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link to="/maintenance">Maintenance & Support</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link to="/project-execution">Project Execution</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Highlights Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-blue-300 mb-4">Get in Touch</h4>
          <p className="text-sm mb-2">
            Email: <a href="mailto:info@deltaengineeringsolution.com" className="hover:text-blue-400">info@deltaengineeringsolution.com</a>
          </p>
          <p className="text-sm mb-2">
            Phone: <a href="tel:+9779845598087" className="hover:text-blue-400">+977 9845598087</a>
          </p>
          <p className="text-sm mb-4">Address: Hetauda, Makwanpur</p>

          <div className="flex space-x-4">
            {/* Facebook Link */}
            <a href="https://web.facebook.com/itsdeso" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <FaFacebook className="w-6 h-6" />
            </a>

            {/* Email Link */}
            <a href="mailto:info@deltaengineeringsolution.com" className="hover:text-blue-400 transition-colors duration-300">
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Delta Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;