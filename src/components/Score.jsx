import React from 'react';


function Score({ score, highScore, }) {
    return (
        <div className="score-container">
            <div className="score-item">
                <p>Current Score: {score}</p>
            </div>
            <div className="score-item">
                <p> 🏎️ High Score: {highScore} 🏎️ </p>
            </div>
        </div>
    );
}

export default Score;