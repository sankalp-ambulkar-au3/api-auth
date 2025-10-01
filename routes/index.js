import express from "express";
import registerUser from "./register.js";

const router = express.Router();

router.use("/", registerUser);

// future: router.use("/posts", postsRouter)

export default router;
