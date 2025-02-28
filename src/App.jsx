import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
 import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/Contactus"; // Ensure correct casing

const App = () => {
  return (
    <Router> {/* ✅ Only one Router is needed */}
      <Header />
      <About />
      <Project />
      <Testimonial />
      <ContactUs />
      <Routes>
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
