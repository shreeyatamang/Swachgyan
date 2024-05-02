const express = require('express');
const connectToMongoDB = require("./config/database.js");
const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');
const bodyParser = require("body-parser");

const app = express();
connectToMongoDB();

app.use(express.json());

app.use(bodyParser.json());

app.use('/auth', userRoutes);
app.use('/quiz',quizRoutes);


app.listen(3000, () => {
    console.log("Node API is running on port 3000");
  });