import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO at XYZ Corp",
    review: "Exceptional service! Delta Engineering transformed our operations.",
    stars: 5,
    image: "/client1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Project Manager at ABC Ltd",
    review: "Highly professional team with outstanding quality work!",
    stars: 4,
    image: "/client2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "CTO at Innovatech",
    review: "Their solutions streamlined our workflow seamlessly.",
    stars: 5,
    image: "/client3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Director at Future Solutions",
    review: "Reliable, innovative, and a pleasure to work with!",
    stars: 4,
    image: "/client4.jpg",
  },
  {
    id: 5,
    name: "Chris Wilson",
    position: "Manager at Global Systems",
    review: "Impressed with their technical expertise and support.",
    stars: 5,
    image: "/client5.jpg",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const controls = useAnimation();

  // Function to loop infinitely
  const startAutoScroll = async () => {
    while (true) {
      await controls.start({ x: "-100%", transition: { duration: 6, ease: "linear" } });
      sliderRef.current.appendChild(sliderRef.current.firstChild);
      controls.set({ x: 0 });
    }
  };

  return (
    <div className="overflow-hidden py-10 bg-gray-100 relative" id="Testomonial">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
        What Our Clients Say
      </h2>

      <motion.div
        ref={sliderRef}
        className="flex gap-6 cursor-grab"
        animate={controls}
        onMouseEnter={() => controls.stop()} // Stop animation on hover
        onMouseLeave={startAutoScroll} // Restart animation on mouse leave
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
