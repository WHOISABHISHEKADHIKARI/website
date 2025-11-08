import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4 sm:px-14 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={assets.brand_img}
            alt="Delta Engineering Logo"
            className="w-24 h-auto mb-4"
            loading="lazy"
          />
          <h3 className="text-xl font-bold text-blue-400">
            Delta Engineering Solution
          </h3>
          <p className="text-sm mt-2 max-w-xs">
            Powering Projects, Fueling Success since 2015.
          </p>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-blue-300 mb-4">
            Our Best Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/automation"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Automation Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/consulting"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Expert Consulting
              </Link>
            </li>
            <li>
              <Link
                to="/maintenance"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Maintenance & Support
              </Link>
            </li>
            <li>
              <Link
                to="/project-execution"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Project Execution
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-blue-300 mb-4">
            Get in Touch
          </h4>
          <p className="text-sm mb-2">
            Email:{" "}
            <a
              href="mailto:info@deltaengineeringsolution.com"
              className="hover:text-blue-400"
            >
              info@deltaengineeringsolution.com
            </a>
          </p>
          <p className="text-sm mb-2">
            Phone:{" "}
            <a
              href="tel:+9779845598087"
              className="hover:text-blue-400"
            >
              +977 9845598087
            </a>
          </p>
          <p className="text-sm mb-4">Address: Hetauda, Makwanpur</p>

          <div className="flex space-x-4 mt-2">
            <a
              href="https://web.facebook.com/itsdeso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="mailto:info@deltaengineeringsolution.com"
              aria-label="Email"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-medium">
            Delta Engineering Solution
          </span>
          . All rights reserved.
        </p>
        <p className="text-gray-400 mt-1 text-xs">
          Designed & Developed by Delta Engineering Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
