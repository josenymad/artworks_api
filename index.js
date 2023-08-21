import express from "express";
import mongoose from "mongoose";

const app = express();
const mongoString = process.env.DATABASE_URL;
const database = mongoose.connection;
const PORT = process.env.PORT;

require("dotenv").config();

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
