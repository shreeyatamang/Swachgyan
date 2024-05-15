//schema import garne
// controller bata export garera route ma import garne
// index.js ma route lai matra import garne

const LoginModel = require("../models/loginmodel");
const SignupModel = require("../models/signupmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/token");

exports.signup = async (req, res) => {
  try {
    const { username, password, email, phoneNumber, confirmpassword } =
      req.body;

    // Check if email is in correct format
    // const emailRegex = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    // if (!emailRegex.test(email)) {
    //   return res.status(400).json({ message: "Invalid email format" });
    // }

    // Check if phone number is in correct format (10 digits)
    // const phoneRegex = /^\d{10}$/;
    // if (!phoneRegex.test(phoneNumber)) {
    //   return res.status(400).json({ message: "Invalid phone number format" });
    // }

    // Check if passwords match
    // if (password !== confirmpassword) {
    //   return res.status(400).json({ message: "Passwords do not match" });
    // }

    // Check if username or email already exists
    const existingUser = await SignupModel.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    // Create new user
    const newUser = new SignupModel({
      username,
      password,
      email,
      phonenumber: phoneNumber,
      confirmpassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    let { username, password } = req.body;
    username = username.trim(); // Trim whitespace from the username

    // Case-insensitive query using RegExp on SignupModel
    const user = await SignupModel.findOne({
      username: { $regex: new RegExp(`^${username}$`, "i") },
    });
    console.log("User found:", user);

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare the received password with the hashed password from the database
    const isValidPassword = password === user.password;

    if (!isValidPassword) {
      console.log("Invalid password for user:", username);
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Create a new login instance and save it
    const newLogin = new LoginModel({ username, password: user.password });
    await newLogin.save();

    // Send a custom success message
    res.json({ message: "User successfully logged in." });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "An error occurred while logging in" });
  }
};
