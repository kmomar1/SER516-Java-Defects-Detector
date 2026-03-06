import Stat from "../models/StatModel.js";

// CREATE


// READ (GET ALL STATS)
export const getStats = async (req, res) => {
  try {
    const stats = await Stat.find();
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read and calcualte focus factor
export const getFocusFactor = async (req, res) => {
  try {
    const stats = await Stat.find();

    const capacity = stats.length; // previously total scans or repository count
    const velocity = stats.reduce((sum, stat) => sum + stat.velocity, 0); // previously sum of defects

    const focusFactor = velocity / capacity;

    res.status(200).json({
      focusFactor,
      velocity,
      capacity
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};