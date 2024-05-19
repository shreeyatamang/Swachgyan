const express = require('express');
const router = express.Router();
const dragdropControllers = require("../controllers/dragdropControllers");

router.post('/play', dragdropControllers.dragdropGame);
router.get('/score', dragdropControllers.getScore);

module.exports = router;
