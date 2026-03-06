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

// UPDATE
export const updateStat = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Stat.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Stat not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deletStatbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Stat.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ error: "Stat not found" });
    
    res.status(200).json(deleted);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};