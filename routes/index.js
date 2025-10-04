import express from "express";
import registerUser from "./register.js";
import loginUser from "./login.js";

const router = express.Router();

router.use("/", registerUser);

router.use("/", loginUser);
// future: router.use("/posts", postsRouter)

export default router;
