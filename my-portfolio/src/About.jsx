import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="body" id="fullAbout">
      <div className="profile-container">
        {/* Navbar */}
        <nav className="navbar">
          <h2 className="logo">Sagar Joshi</h2>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="profile-content">
          <div className="profile-image">
            <img src="" alt="Sagar Joshi" /> 
          </div>

          <div className="profile-text">
            <h1>Hey. What's Up? Hello! 👋</h1>
            <p>
              I'm <strong>Sagar Joshi</strong> — a <strong>web developer</strong> and
              <strong> content creator</strong> who blends the best of design and writing into
              compelling and engaging brand content.
            </p>
            <p><strong>Content is what I live for.</strong></p>
            <p>
              But when I'm not constantly hitting refresh on my Twitter feed or
              have maxed out my pinning time for the day, I'm probably at the
              gym or watching the latest movie at the box office. Leading an
              active lifestyle is a personal goal that my Fitbit and I are
              trying to make a habit.
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
