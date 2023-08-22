import express from "express";
import { Model } from "mongoose";

const router = express.Router();

router.post("/post", async (req, res) => {
  const data = new Model({
    company: req.body.company,
    date: req.body.date,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
