// import React from "react";
import React, { useRef } from 'react';
import "./Home.css";
import "./About.css";
import "./Contact.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'font-awesome/css/font-awesome.min.css';
import aboutImage from './images/20240502_203935.jpg';
import downloadImage from './images/portimg.png';

const Portfolio = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const handelContact = () => {
    navigate('/contact');
  }

  const handelAbout = () => {
    navigate('/about');
  }

  const handelProject = () => {
    navigate('/projects')
  }

  const handelServices = () => {
    navigate('/services')
  }


  const scrollToSection = (sectionRef) => {
    setTimeout(() => {
      const offset = 100; // Adjust this value based on your navbar height
      const top = sectionRef.current.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }, 10);  // Small delay to ensure smooth scroll
  };



  return (
    <div id="body">
      <div className="portfolio">
        <nav className="navbar">
          <h2 className="logo" id="size">Portfolio</h2>
          <ul>
            <li id="size"><a href="#home" className="active">Home</a></li>
            {/* <li id="size"><a href="" onClick={handelAbout}>About</a></li> */}
            <li id="size"><a href="#about" onClick={() => scrollToSection(aboutRef)}>About</a></li>
            <li id="size"><a href="" onClick={handelServices}>Services</a></li>
            <li id="size"><a href="" onClick={handelProject}>Projects</a></li>
            <li id="size"><a href="#contact" onClick={() => scrollToSection(contactRef)}>Contact</a></li>
          </ul>
        </nav>

        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Hi, I'm Sagar Joshi</h1> <br />
            <h3>FullStack Web Developer</h3> <br /> <br />
            <p>Hi Everyone, I am <strong>Sagar Joshi</strong> form Haldwani, Uttrakhand, India.</p>
            <p>I am pursuing B.Tech. in Computer Science.</p><br /> <br />
            <p>Apart from coading, some other activities i love to do!</p>
            <p>~Poetry</p>
            <p>~Travelling.</p> <br /> <br />
            <div className="buttons">
              <button className="hire">Hire Me</button>
              <button className="talk">Let's Talk</button>
            </div> <br /> <br />


            <div className="unique-social-icons">
                <a href="https://www.facebook.com" target="_blank" >
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" >
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>


          </div>
          <div className="hero-image">
            <img src={downloadImage} alt="Sohag Hosen" />
          </div>
        </section> <br /> <br /><br />




        <section id="fullAbout" >
          <h2 ref={aboutRef}>About</h2> <br /> <br />
          <div className="profile-container" id="fullAbout2" >

            {/* Main Content */}
            <div className="profile-content" align="center">
              <div className="profile-image" style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={aboutImage}
                  alt="Sagar Joshi"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '3px solid white',
                  }}
                />
              </div>

              <div className="profile-text">
                <h1 id="color">Hey. What's Up? Hello! 👋</h1>
                <p> <br /> <br />
                  I'm <strong>Sagar Joshi</strong> — a <strong>web developer</strong> who blends the best of design and skills into compelling and engaging websites.
                </p> <br />
                <p><strong>Development is what I live for.</strong></p> <br />
                <p>
                A passionate <strong>Full-Stack Developer</strong> with expertise in building dynamic and scalable 
                web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, 
                I craft seamless user experiences and deliver high-quality, efficient solutions.
                </p> <br /> 
                <div className="links">
                  <a href="" className="resume-link">RESUME</a>
                  <a href="" className="behance-link">BEHANCE</a>
                </div>
              </div>
            </div>
          </div>
        </section > <br /> <br /> 



        <section id="contact" ref={contactRef}>
          <div className="unique-contact-container">
            <div className="unique-contact-left">
              <h2 className="unique-contact-title">CONTACT</h2> <br /> <br />
              <h1 className="unique-contact-heading">Let’s make something great together</h1> <br /><br /> <br /> <br /><br /><br /> <br /> <br />
              {/* <p className="unique-contact-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
              </p> <br /> <br /> <br /> */}

              <div className="unique-social-icons">
                <a href="https://www.facebook.com" target="_blank" >
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" >
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>


            </div>
            <div className="unique-contact-right">
              <form className="unique-contact-form">
                <div className="unique-form-group">
                  <input type="text" placeholder="First Name" className="unique-input" required />
                  <input type="text" placeholder="Last Name" className="unique-input" required />
                </div>
                <input type="email" placeholder="Email Address" className="unique-input full-width" required />
                <input type="text" placeholder="Subject" className="unique-input full-width" />
                <textarea placeholder="Your Message" className="unique-textarea" required></textarea>
                <button type="submit" className="unique-submit-button">Submit Form</button>
              </form>
            </div>
          </div> 
        </section> <br /> <br />

        <footer>
            <p id="foot">Copyright &copy; Sagar Joshi. All Rights Reserved.</p>
          </footer>



      </div>
    </div>

  );
};
export default Portfolio;

