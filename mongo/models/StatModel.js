import mongoose from "mongoose";

const StatSchema = new mongoose.Schema({
  workcapacity : Number,
  velocity : Number,
  scannedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Stat", StatSchema);