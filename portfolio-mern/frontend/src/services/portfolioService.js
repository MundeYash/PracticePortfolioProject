export const getPortfolioData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        bio: "I am a software developer with a passion for building web applications and a love for technology.",
        skills: ["JavaScript", "React", "Node.js", "CSS", "HTML", "MongoDB", "Express"],
        projects: [
          {
            title: "Fitness Web Application",
            description: "A comprehensive fitness web application using the MERN stack and an API for fetching different exercises.",
            technologies: ["MongoDB", "Express", "React", "Node.js"],
            githubLink: "https://github.com/yourusername/fitness-web-app",
            liveDemo: "https://fitness-web-app.com"
          },
          {
            title: "BuyKaro E-commerce Platform",
            description: "An e-commerce platform. Built with React, Redux, Node.js, and MongoDB. Integrated with payment gateway and order tracking system.",
            
            technologies: ["React", "Redux", "Node.js", "MongoDB"],
            githubLink: "https://github.com/johndoe/project2",
            liveDemo: "https://project2.com"
          }
        ]
      });
    }, 1000);
  });
};
