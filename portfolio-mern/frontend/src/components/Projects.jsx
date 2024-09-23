import React, { useState, useEffect } from 'react';
import { getPortfolioData } from '../services/portfolioService';
import './Projects.css';

const Projects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPortfolioData().then((response) => setData(response));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="projects container">
      <h3>Projects</h3>
      {data.projects.map((project, index) => (
        <div key={index} className="project">
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div className="technologies">
            <strong>Technologies:</strong>
            {project.technologies.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
          
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>

          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
