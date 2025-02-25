import React from "react";
import { assets } from "../assets/assets"; // Assuming you have project images or icons

const Projects = () => {
  // Six sample project data (replace with your real projects)
  const projects = [
    {
      id: 1,
      title: "Electric Charging Statio Dharkey",
      description:
        "Designed a fully automated warehouse system, reducing costs by 30%.",
      image: assets.project_img_1, // Placeholder; replace with specific project image
      tags: ["Internetofthing", "ElectricEngineering"],
    },
    {
      id: 2,
      title: "Urine Collection System Hetauda",
      image: assets.project_img_2, 
      description:
        "Integrated farm house Urine collection of multiple distribution power facility, cutting blockage and reducing blockage and cost  by 25%.",
      // image: assets.project_img_2, // Placeholder
      tags: ["Energy", "Consulting"],
    },
    {
      id: 3,
      title: "Substation Maintenance Upgrade",
      description:
        "Upgraded maintenance Substation Manahari, extending equipment life by 5 years.",
      image: assets.project_img_3, // Placeholder
      tags: ["Maintenance", "Engineering"],
    },
    {
      id: 4,
      title: "Smart Factory Retrofit",
      description:
        "Retrofitted a factory with IoT solutions, boosting productivity by 20%.",
      image: assets.brand_img, // Placeholder
      tags: ["Automation", "IoT"],
    },
    {
      id: 5,
      title: "Water Treatment Plant",
      description:
        "Executed a water treatment project, ensuring 99% efficiency.",
      image: assets.brand_img, // Placeholder
      tags: ["Engineering", "Sustainability"],
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      description:
        "Optimized supply chain logistics, reducing delivery times by 15%.",
      image: assets.brand_img, // Placeholder
      tags: ["Logistics", "Consulting"],
    },
  ];

  return (
    <div
      className="container mx-auto px-4 py-8 sm:p-14 md:px-20 lg:px-32 bg-gray-50"
      id="Project"
    >
      {/* Section Header */}
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Our
        <span className="underline underline-offset-4 decoration-2 text-blue-600 bg-blue-100 px-2 py-1 rounded-md shadow-sm ml-2">
          Projects
        </span>
      </h1>
      {/* Intro Paragraph with Emphasis */}
      {/* Intro Paragraph with Emphasis */}
      <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-8 text-justify px-2 sm:px-0 max-w-3xl mx-auto">
        Discover how{" "}
        <strong className="text-blue-600">Delta Engineering</strong> transforms
        ideas into reality with
        <strong className="bg-yellow-200 px-1 rounded">
          {" "}
          innovative solutions and flawless execution
        </strong>
        .
      </p>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {project.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Learn More Link */}
              <a
                href={`#project-${project.id}`} // Replace with actual project page link if available
                className="mt-4 inline-block text-blue-600 font-medium hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <p className="text-base xs:text-lg sm:text-xl text-gray-600 mb-4">
          Ready to see what we can do for you?
        </p>
        <a
          href="#contact" // Replace with your contact page link
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Projects;
