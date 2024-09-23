const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  skills: [String],
  projects: [{
    title: String,
    description: String,
    technologies: [String],
    githubLink: String,
    liveDemo: String,
  }],
  resumeLink: String,
  contactInfo: {
    email: String,
    github: String,
    linkedin: String,
  },
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
