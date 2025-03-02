import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/Contactus"; 
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop"; 
const App = () => {
  return (
    <Router>
      <Navbar />
      <BackToTop /> 
      <Routes>
        <Route path="/" element={<><Header /><About /><Project /><Testimonial /><ContactUs /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
