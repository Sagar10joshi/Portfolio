import React from 'react';
import './Project.css';
import ProjectCard from './Projectcard';
import './Home.css';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

function Project() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const projects = [
    {
      name: 'Quiz Website',
      description: 'A short description of project one. It’s an awesome project with amazing features.',
      link: 'https://gehuquiz-2oyc.vercel.app/',
    },
    {
      name: 'User Dashboard with firebase',
      description: 'Project two is even more amazing. Here’s a quick rundown of its functionality.',
      link: 'https://student-alpha-blush.vercel.app/',
    },
    {
      name: 'Project Three',
      description: 'This is the third project. It’s cool, innovative, and offers great UX!',
      link: 'https://example.com/project-three',
    },
  ];

  return (
    <section id='body'>
      <div className="portfolio">
        <nav className="navbar">
          <h2 className="logo">Portfolio</h2>
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/services" >Services</a></li>
            <li><a href="/contact" >Contact</a></li>
          </ul>
        </nav>
      </div> <br /> <br /> <br /> <br /> <br />

      <section className="big" id='pro'>
        <div className="App">
          <h1 className="header">My Amazing Projects</h1>
          <div className="projects-container">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Project;

