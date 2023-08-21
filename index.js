import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const app = express();
const database = mongoose.connection;

app.use(express.json());

mongoose.connect(mongoString);

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
