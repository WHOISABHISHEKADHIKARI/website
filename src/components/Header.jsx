import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaCommentDots } from "react-icons/fa";
import Navbar from "./Navbar";
import ChatBot from "./ChatBot"; // Import chatbot component

// Import local images
import projectImg1 from "../assets/splash_images/project_img1.jpg";
import projectImg2 from "../assets/splash_images/project_img2.jpg";
import projectImg3 from "../assets/splash_images/project_img3.jpg";
import projectImg4 from "../assets/splash_images/project_img4.jpg";
import projectImg5 from "../assets/splash_images/project_img5.jpg";
import projectImg6 from "../assets/splash_images/project_img6.jpg";

// Store images in an array
const images = [projectImg1, projectImg2, projectImg3, projectImg4, projectImg5, projectImg6];

const Header = () => {
  const [imageIndex, setImageIndex] = useState(() => Math.floor(Math.random() * images.length));
  const [loading, setLoading] = useState(true);

  // Preload images to prevent flickering
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simulate initial loading
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Skeleton Loader */}
      {loading ? (
        <div className="absolute inset-0 w-full h-full bg-gray-300 animate-pulse"></div>
      ) : (
        <>
          {/* Background Image with Fade Effect */}
          <div
            key={imageIndex} // Helps React track image changes
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-100"
            style={{ backgroundImage: `url(${images[imageIndex]})` }}
          ></div>

          {/* Dark Overlay to Ensure Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <Navbar />
        <div className="container mx-auto py-6 flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold max-w-4xl leading-tight pt-16 text-white">
            Powering Projects, Fueling Success!
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="mailto:info@deltaengineeringsolution.com"
              className="border border-white px-6 py-3 rounded-lg text-white bg-black bg-opacity-40 hover:bg-white hover:text-black transition duration-300"
              aria-label="Email us"
            >
              Email Now
            </a>
            <a
              href="tel:+9779845598087"
              className="bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition duration-300 sm:block md:hidden"
              aria-label="Call us now"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/9779845598087"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-6 py-3 rounded-lg text-white hover:bg-green-600 transition duration-300 hidden md:flex items-center gap-2"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp className="text-white text-xl" />
              Chat with us
            </a>
          </div>
        </div>
      </div>

 
      
      {/* Floating ChatBot Button */}
      <ChatBot />
    </div>
  );
};

export default Header;
