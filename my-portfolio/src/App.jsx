import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Portfolio from "./Home";
import Contact from "./Contact";
import About from "./About";
// import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
