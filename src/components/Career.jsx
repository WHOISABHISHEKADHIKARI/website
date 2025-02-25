import React, { useState } from "react";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    desiredPost: "",
    document: null,
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.desiredPost.trim())
      tempErrors.desiredPost = "Desired position is required";
    if (!formData.document) tempErrors.document = "Document is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData({ ...formData, document: file });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, document: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Form Submitted", formData);
    setMessage("Thank you for subscribing! We’ll notify you of new job openings.");
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    setFormData({ name: "", email: "", desiredPost: "", document: null });
  };

  return (
    <div
      id="Career"
      className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-6 relative"
    >
      <h1 className="text-3xl font-bold mb-6">Join Our Team</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">
        We’re always looking for talented individuals. Subscribe to get notified
        when a job matching your interest opens up!
      </p>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-600 text-white py-2 px-4 rounded shadow-lg transition-opacity duration-500">
          {message}
        </div>
      )}

      {/* Job Openings */}
      <div className="mb-10 w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Current Openings</h2>
        <ul className="bg-white shadow-md rounded-lg p-6">
          <li className="border-b py-2">Frontend Developer</li>
          <li className="border-b py-2">Backend Developer</li>
          <li className="py-2">UI/UX Designer</li>
        </ul>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">Subscribe for Job Updates</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-2 placeholder-gray-500"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-2 placeholder-gray-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="text"
          name="desiredPost"
          placeholder="Desired Position"
          value={formData.desiredPost}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-2 placeholder-gray-500"
        />
        {errors.desiredPost && <p className="text-red-500 text-sm">{errors.desiredPost}</p>}

        {/* File Upload */}
        <div
          className="w-full p-4 border border-dashed border-gray-400 rounded text-center mb-2 placeholder-gray-500 cursor-pointer"
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          Drag & Drop Your Resume Here
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        {errors.document && <p className="text-red-500 text-sm">{errors.document}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Career;
