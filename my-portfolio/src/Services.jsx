// import React, { useState, useEffect } from "react";
// import "./Services.css";
// import serviceImage from './images/Screenshot.png';

// const words = ["Services", "Business", "Ideas", "Solutions"];

// const Services = () => {
//   const [currentWord, setCurrentWord] = useState(words[0]);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index = (index + 1) % words.length;
//       setCurrentWord(words[index]);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container">
//       <div className="hero-section">
//         <div className="text-content">
//           <h1>
//             Bring Your <br /><span className="changing-word">{currentWord}</span> <br /> into reality
//           </h1> <br />
//           <p className="subtext">Turning Dreams into Digital Realities: My Expertise, Your Success</p> <br />
//           <button className="cta-button">GET IN TOUCH</button>
//         </div>
//         <div className="image-content">
//           <img
//                             src={serviceImage}
//                             alt="Sagar Joshi"

//                           />
//         </div>
//       </div>
//       <div className="services-menu">
//         <span>Web Development</span>
//         <span className="active">Backend Services</span>
//         <span>App Development</span>
//         <span>AI-ML Workloads</span>
//       </div>
//     </div>
//   );
// };

// export default Services;







import React, { useState, useEffect } from "react";
import "./Services.css";
import serviceImage from './images/Screenshot.png';

const words = ["Services", "Business", "Ideas", "Solutions"];

const servicesData = {
  "Web Development": {
    title: "Websites",
    description: "We build horizontally scalable, high throughput solutions from ground up. These solutions are custom made for customers use-case with use of modern technology.",
    tags: ["SEO focused", "Modern", "Custom UX", "High Scaled Backend"]
  },
  "Backend Services": {
    title: "Backend Services",
    description: "Our backend solutions are built for performance and scalability, ensuring a secure and efficient infrastructure.",
    tags: ["Scalable APIs", "Database Optimization", "Secure Authentication"]
  },
  "App Development": {
    title: "App Development",
    description: "We create modern and interactive mobile applications for iOS and Android platforms using the latest technologies.",
    tags: ["Cross-Platform", "Modern UI", "Fast Performance"]
  }
};

const Services = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [selectedService, setSelectedService] = useState("Web Development");

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
          <img src={serviceImage} alt="Sagar Joshi" />
        </div>
      </div> <br /> <br />

      <div className="services-menu">
        {Object.keys(servicesData).map((service) => (
          <span
            key={service}
            className={selectedService === service ? "active" : ""}
            onClick={() => setSelectedService(service)}
          >
            {service}
          </span>
        ))}
      </div> <br /> <br />

      {/* Service Box */}
      <div className={`service-box ${selectedService ? "active" : ""}`}>
        <h2>{servicesData[selectedService].title}</h2> <br /> <br />
        <p>{servicesData[selectedService].description}</p> <br />
        <div className="tags">
          {servicesData[selectedService].tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div> <br /> <br /> <br />
        <button className="cta-button">BOOK AN APPOINTMENT</button>
      </div>
    </div>
  );
};

export default Services;

