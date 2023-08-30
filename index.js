import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./src/app.js";

dotenv.config();

let mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const database = mongoose.connection;

if (process.env.NODE_ENV === "testing") {
  mongoString = process.env.MONGO_URI_TEST;
}

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
