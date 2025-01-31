import React from 'react';
import './Project.css';
import ProjectCard from './Projectcard';

function Project() {
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
    <div className="big">
        <div className="App">
      <h1 className="header">My Amazing Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Project;
