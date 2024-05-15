const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const dragdropControllers = require("../controllers/dragdropControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/signup", userControllers.signup);
router.post("/login", userControllers.login);

// router.post('/dragdrop', dragdropControllers.dragdropGame);
// router.get('/score', dragdropControllers.getScore);


module.exports = router;
