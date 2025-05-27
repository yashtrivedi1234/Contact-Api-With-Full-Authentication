import express, { Router } from "express";
import { register, login } from "../Controllers/user.js";

const router = express.Router();

//user register
router.post("/register", register);

// user login
router.post("/login", login);

export default router;
