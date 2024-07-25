import mongoose from "mongoose";

// Example app model construction
export const appSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: () => new Date(),
  },
  updated_at: {
    type: Date,
    default: () => new Date(),
  },
});

export const AppModel = mongoose.model("App", appSchema);
