// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="relative max-w-full min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;
