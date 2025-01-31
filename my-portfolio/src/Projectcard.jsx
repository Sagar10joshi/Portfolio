import React from 'react';
import './Projectcard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2 className="project-name">{project.name}</h2>
      <p className="project-description">{project.description}</p>
      <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
