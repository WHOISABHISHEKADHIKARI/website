import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Career from "./components/Career";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial"; // Fixed import
import ContactUs from "./components/Contactus"; // Ensure correct casing

const App = () => {
  return (
    <Router>
      <Header />
      <About/>
      <Project/>
      <Testimonial/>
      <ContactUs/>
      <Routes>
        <Route path="/project" element={<Project />} />
        <Route path="/career" element={<Career />} />
        
        
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
