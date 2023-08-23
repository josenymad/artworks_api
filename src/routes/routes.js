import express from "express";
import Model from "../models/models.js";

const router = express.Router();

router.post("/post", async (req, res) => {
  const data = new Model({
    company: req.body.company,
    product: req.body.product,
    partNumber: req.body.partNumber,
    date: new Date(req.body.date),
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
