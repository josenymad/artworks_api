import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

export default app;
