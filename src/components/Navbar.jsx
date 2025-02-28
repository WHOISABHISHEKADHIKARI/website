import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle("overflow-hidden", !isMenuOpen); // Prevent scrolling when open
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        document.body.classList.remove("overflow-hidden");
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        document.body.classList.remove("overflow-hidden");
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
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
                href="#Testimonial"
                className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </nav>

        {/* ✅ Fixed: "Get in Touch" Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          aria-label="Contact us"
        >
          Get in Touch
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden w-7 cursor-pointer menu-icon"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <img src={assets.menu_icon} alt="Menu Icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id="mobileMenu"
        className={`fixed inset-0 bg-black text-white py-6 px-6 flex flex-col gap-6 z-20 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Close Button */}
        <button
          className="text-white absolute top-4 right-4 text-2xl z-30"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Mobile Menu Links */}
        <a
          href="#Header"
          className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
          onClick={toggleMenu}
        >
          Home
        </a>
        <a
          href="#About"
          className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
          onClick={toggleMenu}
        >
          About
        </a>
        <a
          href="#Project"
          className="cursor-pointer font-semibold text-white hover:underline transition-all duration-300"
          onClick={toggleMenu}
        >
          Projects
        </a>

        {/* ✅ Fixed: "Get in Touch" Button in Mobile Menu */}
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg text-center"
          onClick={toggleMenu}
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Navbar;
