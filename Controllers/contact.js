import { Contact } from "../Models/Contact.js";

// Get all contacts
export const getAllContact = async (req, res) => {
  try {
    // Fetch all contacts from the database
    const userContact = await Contact.find();

    // Check if no contacts exist
    if (!userContact || userContact.length === 0)
      return res.json({ message: "No contacts exist", success: false });

    // Return the list of contacts
    res.json({ message: "All contacts fetched", userContact, success: true });
  } catch (error) {
    // Handle any server errors
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Create a new contact
export const newContact = async (req, res) => {
  try {
    // Extract fields from request body
    const { name, email, phone, type } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !type)
      return res.json({ message: "All fields are required", success: false });

    // Create and save the new contact with the logged-in user's ID
    // req.user should be set by authentication middleware
    const saveContact = await Contact.create({
      name,
      email,
      phone,
      type,
      user: req.user, // Make sure req.user is set via auth middleware
    });

    // Return the saved contact
    res.json({
      message: "Contact saved successfully",
      saveContact,
      success: true,
    });
  } catch (error) {
    // Handle any server errors
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update a contact by ID
export const updateContactById = async (req, res) => {
  try {
    // Get contact ID from params and updated fields from body
    const id = req.params.id;
    const { name, email, phone, type } = req.body;

    // Update contact using ID
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { name, email, phone, type },
      { new: true } // Return the updated document
    );

    // Check if contact was found and updated
    if (!updatedContact)
      return res.json({ message: "No contact exists", success: false });

    // Return the updated contact
    res.json({
      message: "Contact updated successfully",
      updatedContact,
      success: true,
    });
  } catch (error) {
    // Handle any server errors
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete a contact by ID
export const deleteContactById = async (req, res) => {
  try {
    // Get contact ID from params
    const id = req.params.id;

    // Find and delete the contact
    const deleteContact = await Contact.findByIdAndDelete(id);

    // Check if the contact existed
    if (!deleteContact)
      return res.json({ message: "No contact exists", success: false });

    // Return success message
    res.json({
      message: "Contact deleted successfully",
      success: true,
    });
  } catch (error) {
    // Handle any server errors
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get a single contact by ID
export const getContactById = async (req, res) => {
  try {
    // Get contact ID from params
    const id = req.params.id;

    // Find contact by ID
    const userContact = await Contact.findById(id);

    // Check if contact exists
    if (!userContact)
      return res.json({ message: "No contact found", success: false });

    // Return the found contact
    res.json({ message: "Contact fetched", userContact, success: true });
  } catch (error) {
    // Handle any server errors
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all contacts for a specific user
export const getContactByUserId = async (req, res) => {
  try {
    // Get user ID from params
    const id = req.params.id;

    // Find all contacts associated with a specific user
    const userContact = await Contact.find({ user: id });

    // Check if any contacts were found
    if (!userContact || userContact.length === 0)
      return res.json({ message: "No contacts found", success: false });

    // Return the user's contacts
    res.json({
      message: "User-specific contacts fetched",
      userContact,
      success: true,
    });
  } catch (error) {
    // Handle any server errors
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
