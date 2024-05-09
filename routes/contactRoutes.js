const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contactControllers");

// Route to submit contact form
router.post("/submit", contactControllers.submitContactForm);

module.exports = router;
