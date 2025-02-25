import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto px-4 py-8 sm:p-14 md:px-20 lg:px-32 overflow-hidden text-center bg-gradient-to-b from-gray-50 to-blue-50"
      id="About"
    >
      {/* Enhanced Title with Animation */}
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">
        About
        <br />
        <span className="underline underline-offset-4 decoration-2 text-blue-600 bg-blue-100 px-2 py-1 rounded-md shadow-sm">
          Delta Engineering
        </span>
      </h1>

      {/* Intro Paragraph with Emphasis */}
      <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-8 text-justify px-2 sm:px-0 max-w-3xl mx-auto">
        <strong className="text-blue-600">Delta Engineering</strong> is your
        partner in
        <span className="italic font-medium">
          automation, supply, project execution, service, consulting, and
          maintenance
        </span>
        . We streamline operations and drive success with precision and passion.{" "}
        <strong className="bg-yellow-200 px-1 rounded">
          Powering Projects, Fueling Success!
        </strong>
      </p>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 lg:gap-20 mt-8 w-full px-2 sm:px-0">
        {/* Image with Hover Effect and Shadow */}
        <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={assets.brand_img}
            alt="Delta Engineering Brand Image"
            className="w-full h-auto max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-full object-contain rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl"
          />
        </div>

        {/* Stats and Description */}
        <div className="flex flex-col w-full md:w-1/2 text-gray-600">
          {/* Stats Grid with Custom Borders */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full border-t-2 border-blue-200 pt-4">
            <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                10+
              </p>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                20+
              </p>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col items-center text-center col-span-2 sm:col-span-1 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                7+
              </p>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700">
                Projected Projects
              </p>
            </div>
          </div>

          {/* Enhanced Description with Learn More Button */}
          <div className="mt-6 sm:my-10">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-justify">
              With a relentless commitment to{" "}
              <span className="text-blue-600 font-semibold">innovation</span>{" "}
              and
              <span className="text-blue-600 font-semibold">efficiency</span>,
              we craft high-quality solutions tailored to your unique needs.
              From cutting-edge automation to expert consulting,
              <strong className="text-blue-600">Delta Engineering</strong> fuels
              progress and ensures long-term success. Ready to elevate your
              operations? Let’s build the future together!
            </p>
            {/* Learn More Button */}
            <a
              href="#Projects" // Replace with your desired link (e.g., "/services", "#contact")
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mt-12 w-full px-2 sm:px-0">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
            <p className="font-bold text-blue-600">Innovation</p>
            <p className="text-sm xs:text-base text-gray-600">
              Pushing boundaries with creative solutions.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
            <p className="font-bold text-blue-600">Reliability</p>
            <p className="text-sm xs:text-base text-gray-600">
              Delivering consistent, dependable results.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
            <p className="font-bold text-blue-600">Excellence</p>
            <p className="text-sm xs:text-base text-gray-600">
              Striving for the highest standards in all we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
