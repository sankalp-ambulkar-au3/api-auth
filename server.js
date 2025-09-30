import express from "express";
import { connectDb } from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 7000;

connectDb();

app.listen(PORT, () => {
  console.log("success", PORT);
});
