// import React from "react";
// import "./About.css";
// import aboutImage from './images/20240502_203935.jpg';

// const About = () => {
//   return (
//     <div className="body">
//       <div className="profile-container">
//         {/* Navbar */}
//         <nav className="navbar">
//           <h2 className="logo">Sagar Joshi</h2>
//           <ul className="nav-links">
//             <li><a href="/">Home</a></li>
//             <li><a href="/projects">Projects</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </nav>

//         {/* Main Content */}
//         <div className="profile-content">

//           <div className="profile-image" style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <img
//               src={aboutImage}
//               alt="Sagar Joshi"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 borderRadius: '50%', 
//                 border: '5px solid #2d7b54',
//               }}
//             />
//           </div>

//           <div className="profile-text">
//             <h1>Hey. What's Up? Hello! 👋</h1>
//             <p>
//               I'm <strong>Sagar Joshi</strong> — a <strong>web developer</strong> and
//               <strong> content creator</strong> who blends the best of design and writing into
//               compelling and engaging brand content.
//             </p>
//             <p><strong>Content is what I live for.</strong></p>
//             <p>
//               But when I'm not constantly hitting refresh on my Twitter feed or
//               have maxed out my pinning time for the day, I'm probably at the
//               gym or watching the latest movie at the box office. Leading an
//               active lifestyle is a personal goal that my Fitbit and I are
//               trying to make a habit.
//             </p>
//             <p>
//               Currently, I am a <strong>Sr. Digital Marketing Coordinator</strong> at Meyer —
//               one of the largest U.S. marketers and distributors of cookware and
//               bakeware brands based in the San Francisco Bay Area.
//             </p>
//             <div className="links">
//               <a href="" className="resume-link">RESUME</a>
//               <a href="" className="behance-link">BEHANCE</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React from "react";
import "./About.css";
import aboutImage from './images/20240502_203935.jpg';

const About = () => {
  return (
    <div className="body" id="fullAbout">
      <div className="profile-container">
        {/* Navbar */}
        <nav className="navbar2">
          <h2 className="logo">Sagar Joshi</h2>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="profile-content">

          <div className="profile-image" style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={aboutImage}
              alt="Sagar Joshi"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%', // Makes the image circular
                border: '3px solid white',
              }}
            />
          </div>

          <div className="profile-text">
            <h1>Hey. What's Up? Hello! 👋</h1>
            <p>
              I'm <strong>Sagar Joshi</strong> — a <strong>web developer</strong>
               who blends the best of design and skills into
              compelling and engaging websites.
            </p>
            <p><strong>Development is what I live for.</strong></p>
            <p>
            A passionate <strong>Full-Stack Developer</strong> with expertise in building dynamic and scalable 
            web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, 
            I craft seamless user experiences and deliver high-quality, efficient solutions.
            </p>
            <p>
              Currently, I am a <strong>Sr. Digital Marketing Coordinator</strong> at Meyer —
              one of the largest U.S. marketers and distributors of cookware and
              bakeware brands based in the San Francisco Bay Area.
            </p>
            <div className="links">
              <a href="" className="resume-link">RESUME</a>
              <a href="" className="behance-link">BEHANCE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
