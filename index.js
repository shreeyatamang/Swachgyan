const express = require('express');
const connectToMongoDB = require("./config/database.js");
const userRoutes = require('./routes/userRoutes');
const bodyParser = require("body-parser");

const app = express();
connectToMongoDB();

app.use(express.json());

app.use(bodyParser.json());

app.use('/auth', userRoutes);

app.listen(3000, () => {
    console.log("Node API is running on port 3000");
  });