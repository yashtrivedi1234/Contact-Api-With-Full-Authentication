import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate required fields
    if (!name || !email || !password)
      return res.json({ message: "All fields are required", success: false });

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user)
      return res.json({ message: "User already exists", success: false });

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    user = await User.create({ name, email, password: hashPassword });

    // Send success response
    res.json({ message: "User created successfully", success: true, user });
  } catch (error) {
    // Handle server error
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Login existing user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password)
      return res.json({ message: "All fields are required", success: false });

    // Find user by email
    const user = await User.findOne({ email });
    if (!user)
      return res.json({ message: "User does not exist", success: false });

    // Compare passwords
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass)
      return res.json({ message: "Invalid password", success: false });

    // Generate JWT token
    const token = jwt.sign({ userID: user._id }, process.env.JWT, {
      expiresIn: "1d",
    });

    // Send success response with token
    res.json({ message: `Welcome ${user.name}`, token, success: true });
  } catch (error) {
    // Handle server error
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
