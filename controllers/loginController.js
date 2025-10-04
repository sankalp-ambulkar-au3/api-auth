import { userModel } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const loginController = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Email not found" });
    } else if (await bcrypt.compare(req.body.password, user.password)) {
      const tokenPayload = {
        email: user.email,
      };
      const accessToken = jwt.sign(tokenPayload, process.env.JWT_SECRET);
      res.status(200).json({
        status: "success",
        message: "Successfully logged in!",
        data: {
          accessToken,
        },
      });
    } else {
      const err = new Error("Wrong Password!");
      err.status = 400;
      throw err;
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
