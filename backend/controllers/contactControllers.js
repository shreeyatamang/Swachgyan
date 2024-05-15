const ContactModel = require("../models/contactmodel");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Limit message to 100 words
    if (message.split(/\s+/).length > 100) {
      return res.status(400).json({ message: "Message exceeds 100 words limit" });
    }

    // Save contact form submission
    const newSubmission = new ContactModel({ name, email, subject, message });
    await newSubmission.save();

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
