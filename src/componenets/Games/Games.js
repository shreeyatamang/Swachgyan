import React, { useState, useEffect } from 'react';
import './Games.css';

const Games = () => {
    const [emojis, setEmojis] = useState([
        '🍕', '🍕','🥦', '🥦','🍏', '🍏', '🥕', '🥕', '🥫', '🥫', '📦', '📦', '🥤', '🥤', '🚗', '🚗', 
    ]);
    const [shuffledPairs, setShuffledPairs] = useState([]);

    useEffect(() => {
        const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);
        const selectedEmojis = Array.from(new Set(shuffledEmojis.slice(0, 8)));
        const pairs = [...selectedEmojis, ...selectedEmojis];
        const shuffledPairs = pairs.sort(() => Math.random() - 0.5);
        setShuffledPairs(shuffledPairs);

    }, [emojis]);

    const [flippedIndices, setFlippedIndices] = useState([]);
    const [solvedIndices, setSolvedIndices] = useState([]);

    const handleClick = (index) => {
        if (flippedIndices.length === 2) return;

        setFlippedIndices([...flippedIndices, index]);

        if (flippedIndices.length === 1) {
            if (shuffledPairs[flippedIndices[0]] === shuffledPairs[index]) {
                
                setSolvedIndices([...solvedIndices, flippedIndices[0], index]);
                setFlippedIndices([]);
            } else {
                
                setTimeout(() => {
                    setFlippedIndices([]);
                }, 1000);
            }
        }
    };

    const renderBoxes = () => {
    
        
        return shuffledPairs.map((emoji, index) => {
            const isFlipped = flippedIndices.includes(index);
            const isSolved = solvedIndices.includes(index);

            return (
                <div
                    key={index}
                    className={`item ${isFlipped || isSolved ? 'flip' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    {isFlipped || isSolved ? emoji : ''}
                </div>
            );
        });
    };
    

    const resetGame = () => {
        setFlippedIndices([]);
        setSolvedIndices([]);
        setEmojis([
            '🍕', '🍕','🥦', '🥦','🍃', '🍃', '🌱', '🌱', '🥫', '🥫', '📦', '📦', '🥤', '🥤', '📱', '📱', 
        ]);
    };

    return (
        <div className="container">
            <h2>Games</h2>
            <div className="memoryGame">{renderBoxes()}</div>
            <button className="reset" onClick={resetGame}>Reset Game</button>
        </div>
    );

}

export default Games;








