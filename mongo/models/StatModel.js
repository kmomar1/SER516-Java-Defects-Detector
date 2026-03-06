import mongoose from "mongoose";

const StatSchema = new mongoose.Schema({
  repository: String,
  defects: Number,
  scannedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Stat", StatSchema);