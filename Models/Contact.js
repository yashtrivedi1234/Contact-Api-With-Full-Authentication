import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  // Name of the contact (required)
  name: { type: String, required: true },

  // Email of the contact (required)
  email: { type: String, required: true },

  // Phone number of the contact (required)
  phone: { type: String, required: true },

  // Type/category of contact (e.g., personal, work) (required)
  type: { type: String, required: true },

  // Timestamp of contact creation (default: current date/time)
  createdAt: { type: Date, default: Date.now },

  // Reference to the user who created the contact
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Contact = mongoose.model("Contact", contactSchema);
