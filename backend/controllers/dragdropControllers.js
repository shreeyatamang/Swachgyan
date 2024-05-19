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

// Controller to retrieve the score for a specific player
exports.getScore = async (req, res) => {
    try {
      const playerName = req.params.playerName;
  
      // Find the score for the given player name
      const score = await DragDropModel.findOne({ playerName });
  
      if (!score) {
        return res.status(404).json({ message: 'Score not found' });
      }
  
      res.json({score: score.scores });
    } catch (err) {
      console.error('Error retrieving score:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  