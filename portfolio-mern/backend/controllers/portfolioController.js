const Portfolio = require('../models/Portfolio');

// Fetch portfolio data
exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
