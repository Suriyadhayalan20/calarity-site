import "./App.css";
import { useEffect } from "react";
import React from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/LoginPage";

export default function App() {
  
  useEffect(() => {
    // On page load, force scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
    </div>
  );
}
