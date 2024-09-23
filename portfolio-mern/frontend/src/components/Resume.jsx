import React, { useState } from 'react';
import './Resume.css';
const Resume = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="resume">
      <h3>Resume</h3>
      <a href="/path/to/resume.pdf" download>Download Resume</a>
      <div className="interactive-resume">
        <div className="section">
          <h4 onClick={() => setShowEducation(!showEducation)}>Education</h4>
          {showEducation && (
            <div className="content">
              <p><strong>University of Example</strong> - B.S. in Computer Science</p>
              <p>Graduated: 2020</p>
            </div>
          )}
        </div>
        <div className="section">
          <h4 onClick={() => setShowExperience(!showExperience)}>Experience</h4>
          {showExperience && (
            <div className="content">
              <p><strong>Example Corp</strong> - Software Engineer</p>
              <p>Jan 2021 - Present</p>
              <ul>
                <li>Developed web applications using React and Node.js</li>
                <li>Collaborated with cross-functional teams</li>
              </ul>
            </div>
          )}
        </div>
        <div className="section">
          <h4 onClick={() => setShowSkills(!showSkills)}>Skills</h4>
          {showSkills && (
            <div className="content">
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;