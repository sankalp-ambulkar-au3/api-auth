import express from "express";
import { connectDb } from "./config/database.js";
import dotenv from "dotenv";
import router from "./routes/index.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(router);
connectDb();

app.listen(PORT, () => {
  console.log("success", PORT);
});
