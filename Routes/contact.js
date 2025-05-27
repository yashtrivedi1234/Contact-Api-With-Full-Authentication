import express from "express";

import {
  deleteContactById,
  getAllContact,
  getContactById,
  getContactByUserId,
  newContact,
  updateContactById,
} from "../Controllers/contact.js";

import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

// new contact
router.post("/new", isAuthenticated, newContact);

// get all contact
router.get("/", getAllContact);

// get user specific id
router.get("/userid/:id", getContactByUserId);

// get contact by id
router.get("/:id", getContactById);

// update contact by id
router.put("/:id", isAuthenticated, updateContactById);

// delete contact by id
router.delete("/:id", isAuthenticated, deleteContactById);

export default router;
