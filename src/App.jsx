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
import DoctorLogin from "./pages/DoctorLogin";
import PatientLogin from "./pages/PatientLogin";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
// import LoginTemplate from "./pages/LoginTemplate";

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
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        {/* <Route path="/template" element={<LoginTemplate />} /> */}
      </Routes>
      
      <Footer />
    </div>
  );
}
