import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer'; // Import Footer component
import '../styles/main.css'; // Applying global CSS

const Home = () => {
  return (
    <div className="home">
      <div className="section">
        <AboutMe />
        <Skills />
        <Projects />
        <Resume />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default Home;