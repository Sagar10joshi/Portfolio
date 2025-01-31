import React, { useState, useEffect } from "react";
import "./Services.css";

const words = ["Services", "Business", "Ideas", "Solutions"];

const Services = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="hero-section">
        <div className="text-content">
          <h1>
            Bring Your <br /><span className="changing-word">{currentWord}</span> <br /> into reality
          </h1> <br />
          <p className="subtext">Turning Dreams into Digital Realities: My Expertise, Your Success</p> <br />
          <button className="cta-button">GET IN TOUCH</button>
        </div>
        <div className="image-content">
          <img src="gears.png" alt="Gears Illustration" />
        </div>
      </div>
      <div className="services-menu">
        <span>Web Development</span>
        <span className="active">Backend Services</span>
        <span>App Development</span>
        <span>AI-ML Workloads</span>
      </div>
    </div>
  );
};

export default Services;
