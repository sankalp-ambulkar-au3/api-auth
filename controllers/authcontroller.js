import { userModel } from "../models/user.js";
import bcrypt from "bcrypt";
import { isValidEmail } from "../logic.js";

export const register = async (req, res) => {
  try {
    const userExists = await userModel.findOne({ email: req.body.email });
    if (userExists) {
      res.status(400).json({ message: "Email already exists" });
    }
    if (!isValidEmail(req.body.email)) {
      res.status(400).json({ message: "Invalid email format" });
    }
    const userDetails = {
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 12),
    };
    const newUser = new userModel(userDetails);
    newUser.save();
    res
      .status(200)
      .json({ message: "user registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
