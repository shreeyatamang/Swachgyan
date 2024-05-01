const DragDropModel = require("../models/dragdropmodel");

exports.dragdropGame = (req, res) => {
    const playerName = req.body.playerName;
    const score = Math.floor(Math.random() * 101); // Generate a random score

    // Save the score to the database using DragDropModel
    const newScore = new DragDropModel({ playerName, scores: score });
    newScore.save()
        .then(() => {
            res.status(200).json({ message: `Game started for ${playerName}`, score });
        })
        .catch(err => {
            console.error('Error saving score:', err);
            res.status(500).json({ message: 'Internal server error' });
        });
};
