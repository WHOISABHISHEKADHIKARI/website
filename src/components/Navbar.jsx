import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets"; 
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-6 px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="h-10" />

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex gap-8 text-white">
            <li>
              <a
                href="#Header"
                className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Project"
                className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Testomonial"
                className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <Link
                to="/career" // Use Link for navigation
                className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
              >
                Career
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-white px-8 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300"
          aria-label="Contact us"
        >
          Contact us
        </a>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer menu-icon"
          alt="Menu Icon"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label="Open menu"
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobileMenu"
          className="md:hidden absolute top-16 left-0 w-full bg-black text-white py-4 px-6 flex flex-col gap-4 z-20"
        >
          {/* Close Button */}
          <button
            className="text-white absolute top-4 right-4 z-30"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <span className="text-2xl">×</span>
          </button>

          {/* Mobile Menu Links */}
          <a
            href="#Header"
            className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#About"
            className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
          >
            About
          </a>
          <a
            href="#Project"
            className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
          >
            Projects
          </a>
          <Link
            to="/career" // Use Link for navigation
            className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
          >
            Career
          </Link>

          {/* Contact Button */}
          <button className="bg-white text-black px-8 py-2 rounded-md hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
