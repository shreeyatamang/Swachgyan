import React, { useState, useEffect } from 'react';
import './Games.css';

const Games = () => {
    const [emojis, setEmojis] = useState([
        '🍌', '🍌','🥦', '🥦','🍃', '🍃', '🌱', '🌱', '🥫', '🥫', '📦', '📦', '🥤', '🥤', '📱', '📱', 
    ]);

    const handleClick = (index) => {
        // Handle click event
        console.log('Clicked index:', index);
    };
    
    useEffect(() => {
        // Shuffle the emojis array
        const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);
    
        // Select a certain number of emojis (e.g., 8) to form pairs
        const selectedEmojis = shuffledEmojis.slice(0, 8);
    
        // Duplicate each selected emoji to create pairs
        const pairs = [...selectedEmojis, ...selectedEmojis];
    
        // Shuffle the pairs array
        const shuffledPairs = pairs.sort(() => Math.random() - 0.5);
    
        // Create div elements for each emoji pair and append to the memory game container
        for (let i = 0; i < 16; i++) {
            let box = document.createElement("div");
            box.className = 'item';
            box.innerHTML = shuffledPairs[i];
            document.querySelector('.memoryGame').appendChild(box);
        }
    }, []);
    
    
    
    
    
    
    

    const resetGame = () => {
        window.location.reload();
    };

    return (
        <div className="container">
            <h2>Games</h2>
            <div className="memoryGame"></div>
            <button className="reset" onClick={resetGame}>Reset Game</button>
        </div>
    );
}

export default Games;






