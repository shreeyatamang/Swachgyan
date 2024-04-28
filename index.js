const express = require('express');
const connectToMongoDB = require("./config/database.js");
const LoginModel = require("./models/loginmodel");
const SignupModel = require("./models/signupmodel");
const DragDropModel = require("./models/dragdropmodel.js");
const ParticipationModel = require("./models/participationmodel.js");
const QuizModel = require("./models/quizmodel.js");
const userRoutes = require('./routes/userRoutes');

const app = express();
connectToMongoDB();

app.use(express.json());

app.use('/auth', userRoutes);

app.listen(3000, () => {
    console.log("Node API is running on port 3000");
  });