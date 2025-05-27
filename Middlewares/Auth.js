import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

// Middleware to check if the user is authenticated
export const isAuthenticated = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const token = req.header("Authorization");

    // If no token is provided, block access
    if (!token) return res.status(401).json({ message: "Please login first" });

    // Verify the token using secret key
    const decoded = jwt.verify(token, process.env.JWT);

    // Extract user ID from token
    const id = decoded.userID;

    // Find user in the database by ID
    const user = await User.findById(id);

    // If user is not found
    if (!user) return res.status(404).json({ message: "User not found" });

    // Attach user to request object for use in other middlewares/controllers
    req.user = user;

    // Proceed to next middleware/controller
    next();
  } catch (error) {
    // If token is invalid or expired
    res
      .status(401)
      .json({ message: "Invalid or expired token", error: error.message });
  }
};
