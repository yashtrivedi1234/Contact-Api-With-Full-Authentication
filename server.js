import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./Routes/user.js";
import contactRouter from "./Routes/contact.js";
import { config } from "dotenv";

const app = express();

app.use(express.json());

// Use CORS middleware
app.use(cors());

// .env setup
config({path:'.env'})

// home route
app.get("/", (req, res) => {
  res.json({ message: "Hii" });
});

// user register route
app.use("/api/user", userRouter);

// contact route
app.use("/api/contact", contactRouter);

// MongoDB connection
mongoose
  .connect(
    process.env.MONGO_URI,
    {
      dbName: "Node_js_mastery_course",
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// server listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
