const fs = require("fs");
const path = require("path");
const defaultPortfolio = require("../data/defaultPortfolio");

const DATA_FILE = path.join(__dirname, "../data/portfolio.json");

const readPortfolio = () => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(defaultPortfolio, null, 2));
    }
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (error) {
    console.error("Failed to read portfolio data:", error.message);
    return defaultPortfolio;
  }
};

const getPortfolio = async (req, res) => {
  res.status(200).json(readPortfolio());
};

const updatePortfolio = async (req, res) => {
  try {
    const current = readPortfolio();
    const updated = { ...current, ...req.body };
    fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2));
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPortfolio, updatePortfolio };
