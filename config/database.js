import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`✅ Database connected successfully`);
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // stop app if DB not connected
  }
};
