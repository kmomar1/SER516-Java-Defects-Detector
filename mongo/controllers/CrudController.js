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