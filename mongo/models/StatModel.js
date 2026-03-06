import mongoose from "mongoose";

const FocusFactorSchema = new mongoose.Schema({
  velocity: Number,
  workCapacity: Number,
  scannedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("FocusFactor", FocusFactorSchema);
