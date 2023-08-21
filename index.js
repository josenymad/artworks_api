import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.listen(3000, () => {console.log(`Server started at port ${3000}`)});