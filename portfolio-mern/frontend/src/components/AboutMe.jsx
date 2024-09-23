import React, { useState, useEffect } from 'react';
import { getPortfolioData } from '../services/portfolioService';
import './AboutMe.css'

const AboutMe = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPortfolioData().then((response) => setData(response));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="about-me container">
      <img src="https://www.befunky.com/images/prismic/257696e2-c8e3-4fe6-a676-094bd3422c07_hero-photo-editor.jpg?auto=avif,webp&format=jpg&width=1000" alt="Profile" />
      <div>
        <h2>{data.name}</h2>
        <p>{data.bio}</p>
      </div>
    </div>
  );
};

export default AboutMe;
