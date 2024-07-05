import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/contact";
import About from "./components/about";
import MyProjects from "./components/projects";
import Resume from "./components/resume";

export default function App() {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
    </div>
    </>
  );
}
