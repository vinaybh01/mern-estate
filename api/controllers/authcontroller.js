import bcrypt from "bcrypt";
import User from "../models/UserModel.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json("User Created Successfully");
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};
