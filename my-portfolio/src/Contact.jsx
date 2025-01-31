import React from "react";
import "./Contact.css";
import 'font-awesome/css/font-awesome.min.css';

const Contact = () => {
  return (
    <div className="bigcon" id="contact">

      <h1 align="center">Get in touch </h1>
      <h2 align="center">I'd love to hear from you</h2>
      <div className="unique-contact-container">
        <div className="unique-contact-left">
          <h2 className="unique-contact-title">CONTACT</h2> <br /> <br />
          <h1 className="unique-contact-heading">Let’s make something great together</h1> <br />
          <p className="unique-contact-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p> <br /> <br /> <br />
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
              <input type="text" placeholder="Last Name" className="unique-input" required/>
            </div>
            <input type="email" placeholder="Email Address" className="unique-input full-width" required />
            <input type="text" placeholder="Subject" className="unique-input full-width" />
            <textarea placeholder="Your Message" className="unique-textarea" required></textarea>
            <button type="submit" className="unique-submit-button">Submit Form</button>
          </form>
        </div>
      </div>
      <footer>
        <p>&copy; Sagar Joshi. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;

