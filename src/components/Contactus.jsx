import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    const namePattern = /^[A-Za-z ]+$/;
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    } else if (!namePattern.test(formData.name)) {
      formErrors.name = "Only letters and spaces allowed";
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z][a-zA-Z0-9._%+-]*@gmail\.com$/;
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Invalid Gmail address";
      isValid = false;
    }

    const phonePattern = /^[0-9]+$/;
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phonePattern.test(formData.phone)) {
      formErrors.phone = "Only digits allowed";
      isValid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message cannot be empty";
      isValid = false;
    } else if (formData.message.trim().split(/\s+/).length < 4) {
      formErrors.message = "Message must be at least 4 words";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .send(
          "service_sskbraw", // Your service ID
          "template_ermq6an", // Your template ID
          {
            from_name: formData.name,
            reply_to: formData.email,  // This ensures the email is clickable as reply-to
            phone: formData.phone,
            message: formData.message,
          },
          "Wn665GKxLfV6b9r2I" // Your user ID
        )
        .then(
          (result) => {
            setStatusMessage("✅ Your message has been sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
          },
          (error) => {
            setStatusMessage("❌ Oops! Something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-blue-50" id="contact">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Get in Touch  
          <br />
          <span className="underline underline-offset-4 decoration-2 text-blue-600 bg-blue-100 px-2 py-1 rounded-md shadow-sm">
            Contact Us
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : ""}`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Gmail address"
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : ""}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-left">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : ""}`}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1 text-left">{errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-500" : ""}`}
              rows="4"
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1 text-left">{errors.message}</p>}
          </div>

          <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
            Send Message
          </button>
        </form>

        {/* Display status message below the form */}
        {statusMessage && (
          <p className="mt-4 text-sm font-medium text-gray-700 text-left">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
