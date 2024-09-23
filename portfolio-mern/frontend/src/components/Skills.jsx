import React, { useState, useEffect } from 'react';
import { getPortfolioData } from '../services/portfolioService';
import './Skills.css'; // Applying global CSS

const Skills = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPortfolioData().then((response) => setData(response));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="skills container">
      <h3>Skills</h3>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;