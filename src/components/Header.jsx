import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden text-center px-4 sm:px-6"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <div className="container mx-auto py-6 flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold max-w-4xl leading-tight pt-16 text-white">
          Powering Projects, Fueling Success!
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#Project"
            className="border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-black transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-white hover:text-black transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
