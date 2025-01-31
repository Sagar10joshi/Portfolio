import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'font-awesome/css/font-awesome.min.css';

const Portfolio = () => {
    const navigate = useNavigate();
    const handelContact = ()=>{
        navigate('/contact');
      }

      const handelAbout = ()=>{
        navigate('/about');
      }

  return (
    <div id="body">
        <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="" onClick={handelAbout}>About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="" onClick={handelContact}>Contact</a></li>
        </ul>
      </nav>
      
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Hi, I'm Sagar Joshi</h1> <br />
          <h3>FullStack Web Developer</h3> <br /> <br />
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Itaque tempora ex nisi dolore sequi voluptatibus!</p> <br /> <br />
          <div className="buttons">
            <button className="hire">Hire Me</button>
            <button className="talk">Let's Talk</button>
          </div> <br /> <br />
          <div className="social-icons">
            {/* <a href="#"><i className="fab fa-facebook"></i></a> */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook"></i> 
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter"></i>
      </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin"></i> 
      </a>
          </div>
        </div>
        <div className="hero-image">
          <img src=".\src\images\download.png" alt="Sohag Hosen" />
        </div>
      </section>
    </div>
    </div>
  );
};

export default Portfolio;




