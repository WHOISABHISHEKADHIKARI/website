import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import profileImg1 from "../assets/profile_img_1.png";
import profileImg2 from "../assets/profile_img_2.png";
import profileImg3 from "../assets/profile_img_3.png";



const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO at XYZ Corp",
    review: "Exceptional service! Delta Engineering transformed our operations.",
    stars: 5,
    image: profileImg1,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Project Manager at ABC Ltd",
    review: "Highly professional team with outstanding quality work!",
    stars: 4,
    image: profileImg2,
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "CTO at Innovatech",
    review: "Their solutions streamlined our workflow seamlessly.",
    stars: 5,
    image: profileImg3,
  }
];

const TestimonialSlider = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ x: "-100%", transition: { duration: 10, ease: "linear" } }).then(() => {
        controls.set({ x: 0 });
      });
    }, 10500);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="overflow-hidden py-10 bg-gray-100 relative" id="Testimonial">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
        What Our Clients Say
      </h2>

      <motion.div
        ref={sliderRef}
        className="flex gap-6 cursor-grab"
        animate={controls}
        onMouseEnter={() => controls.stop()} 
        onMouseLeave={() => controls.start({ x: "-100%", transition: { duration: 10, ease: "linear" } })} 
        drag="x"
        dragConstraints={{ left: -500, right: 500 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md min-w-[300px] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
            />
            <div className="flex justify-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-yellow-400 ${i < testimonial.stars ? "" : "opacity-30"}`}>
                  ★
                </span>
              ))}
            </div>
            <p className="text-lg font-semibold text-blue-600">"{testimonial.review}"</p>
            <p className="mt-4 text-sm text-gray-600">
              - {testimonial.name}, {testimonial.position}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialSlider;
