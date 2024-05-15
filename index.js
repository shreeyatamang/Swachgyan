const express = require('express');
const connectToMongoDB = require("./config/database.js");
const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');
const contactRoutes = require('./routes/contactRoutes');
const dragdropRoutes = require('./routes/dragdropRoutes');
const bodyParser = require("body-parser");

const app = express();
connectToMongoDB();

app.use(express.json());

app.use(bodyParser.json());

app.use('/auth', userRoutes);
app.use('/quiz',quizRoutes);
app.use('/contact', contactRoutes);
app.use('/dragdrop', dragdropRoutes);


app.listen(3001, () => {
    console.log("Node API is running on port 3001");
  });