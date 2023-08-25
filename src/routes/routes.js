import express from "express";
import Model from "../models/models.js";
import multer from "multer";
import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
});

router.post("/post", upload.single("image"), (req, res) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ACL: "public-read-write",
    ContentType: "application/pdf",
  };

  s3.upload(params, async (error, data) => {
    if (error) {
      res.status(500).send({ err: error });
    }

    console.log(data);

    const artwork = new Model({
      company: req.body.company,
      product: req.body.product,
      partNumber: req.body.partNumber,
      date: new Date(req.body.date),
      image: data.Location,
    });

    try {
      const artworkToSave = await artwork.save();
      res.status(200).json(artworkToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
});

router.get("/getAll", async (_, res) => {
  try {
    const allArtworks = await Model.find();
    res.status(200).json(allArtworks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getByCompany?", async (req, res) => {
  const { company } = req.query;
  try {
    const artworkSearch = await Model.find({
      company: new RegExp(company, "i"),
    });
    res.status(200).json(artworkSearch);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/getByPartNumber?", async (req, res) => {
  const { partNumber } = req.query;
  try {
    const artworkSearch = await Model.find({
      partNumber: new RegExp(partNumber, "i"),
    });
    res.status(200).json(artworkSearch);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
