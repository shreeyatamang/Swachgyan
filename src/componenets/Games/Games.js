import React, { useState, useEffect } from "react";
import "./Games.css";
import bk from "../../assests/bk.png";
import memorygame from "../../assests/memorygame.png";
import playGame from "../../assests/PlayGame.png";
import RecyclabilityChecker from "../BinSort/BinSort";

const Games = () => {
  const [gameStep, setGameStep] = useState("playGame"); // Track the current step of the game
  const [emojis, setEmojis] = useState([
    "🍕",
    "🍕",
    "🥦",
    "🥦",
    "🍏",
    "🍏",
    "🥕",
    "🥕",
    "🥫",
    "🥫",
    "📦",
    "📦",
    "🥤",
    "🥤",
    "🚗",
    "🚗",
  ]);
  const [shuffledPairs, setShuffledPairs] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [solvedIndices, setSolvedIndices] = useState([]);
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);
    const selectedEmojis = Array.from(new Set(shuffledEmojis.slice(0, 8)));
    const pairs = [...selectedEmojis, ...selectedEmojis];
    const shuffledPairs = pairs.sort(() => Math.random() - 0.5);
    setShuffledPairs(shuffledPairs);
  }, [emojis]);

  const handleClick = (index) => {
    if (gameStep === "playGame") {
      setGameStep("squareBox");
    } else if (gameStep === "squareBox") {
      setGameStep("memoryGame");
    } else {
      if (!solvedIndices.includes(index)) {
        if (flippedIndices.includes(index)) {
          setFlippedIndices(flippedIndices.filter((idx) => idx !== index));
        } else {
          setFlippedIndices([...flippedIndices, index]);
          if (flippedIndices.length === 1) {
            if (shuffledPairs[flippedIndices[0]] === shuffledPairs[index]) {
              setSolvedIndices([...solvedIndices, flippedIndices[0], index]);
              setFlippedIndices([]);
              if (solvedIndices.length + 2 === shuffledPairs.length) {
                setShowCongratulations(true);
              }
            } else {
              setTimeout(() => {
                setFlippedIndices([]);
              }, 1000);
            }
          }
        }
      }
    }
  };

  const renderBoxes = () => {
    return shuffledPairs.slice(0, 12).map((emoji, index) => {
      const isFlipped = flippedIndices.includes(index);
      const isSolved = solvedIndices.includes(index);

      return (
        <div
          key={index}
          className={`item ${isFlipped || isSolved ? "flip" : ""}`}
          onClick={() => handleClick(index)}
        >
          {isFlipped || isSolved ? emoji : ""}
        </div>
      );
    });
  };

  const resetGame = () => {
    setFlippedIndices([]);
    setSolvedIndices([]);
    setEmojis([
      "🍕",
      "🍕",
      "🥦",
      "🥦",
      "🍃",
      "🍃",
      "🌱",
      "🌱",
      "🥫",
      "🥫",
      "📦",
      "📦",
      "🥤",
      "🥤",
      "📱",
      "📱",
    ]);
  };

  return (
    <div
      className="Gcontainer"
      style={{
        backgroundImage: `url(${bk})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2>Games</h2>
      {gameStep === "playGame" && (
        <div className="play-game" onClick={() => setGameStep("squareBox")}>
          <img src={playGame} alt="Play Game" />
        </div>
      )}
      {gameStep === "squareBox" && (
        <div className="square-wrapper">
          <div
            className="square-box"
            onClick={() => setGameStep("memoryGame")}
          ></div>

          <div
            className="square-box"
            onClick={() => setGameStep("binSort")}
          ></div>
        </div>
      )}
      {gameStep === "memoryGame" && (
        <div className="container">
          <div className="memoryGame">{renderBoxes()}</div>
          <button className="reset" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      )}
      {gameStep === "binSort" && (
        <>
          <RecyclabilityChecker />
        </>
      )}
      {showCongratulations && (
        <div className="congratulations">
          <p>Congratulations! You made it!</p>
          <button onClick={() => setShowCongratulations(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Games;