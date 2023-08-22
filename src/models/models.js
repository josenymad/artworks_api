import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  company: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
  },
});

export default dataSchema;
