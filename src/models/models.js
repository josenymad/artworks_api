import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  company: {
    required: true,
    type: String,
  },
});

export default mongoose.model("Data", dataSchema);
