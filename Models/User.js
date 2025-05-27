import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // Name of the user (required)
  name: { type: String, required: true },

  // Email of the user (required)
  email: { type: String, required: true },

  // Hashed password of the user (required)
  password: { type: String, required: true },

  // Timestamp of user creation (default: current date/time)
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", userSchema);
