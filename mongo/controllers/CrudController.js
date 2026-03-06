import Stat from "../models/StatModel.js";
import StatSchema from "../models/StatModel.js";

export const createFocusFactor = async (req, res) => {
  try {
    const { velocity, workCapacity } = req.body;

    const stat = new StatSchema({
      velocity,
      workCapacity,
    });

    const saved = await stat.save();

    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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

    const totalScans = stats.length;

    const totalDefects = stats.reduce((sum, stat) => sum + stat.defects, 0);

    // Focus Factor = resolved / total
    // Using scans as resolved and total defects as total issues
    const focusFactor = totalScans / totalDefects;

    res.status(200).json({
      focusFactor,
      totalScans,
      totalDefects,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
