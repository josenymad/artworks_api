import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  company: {
    required: true,
    type: String,
  },
  product: {
    required: true,
    type: String,
  },
  partNumber: {
    required: false,
    type: String,
  },
  date: {
    required: true,
    type: Date,
  },
  image: {
    type: String,
  },
});

export default mongoose.model("Data", dataSchema);
