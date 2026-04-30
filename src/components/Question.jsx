import React, { useState } from 'react';

function Question({ number, image, onGuess }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            onGuess(inputValue);
            setInputValue('');
        }
    }


    return (
        <div className="question-container">
            <h2>Question number {number}</h2>

            <div className="image-box">
                <img
                    src={image}
                    alt="Guess the Letter"
                    style={{ width: '250px', height: '250px', borderRadius: "50%" }}
                />
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    maxLength="1"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoFocus
                />
                <button type="submit">Play</button>
            </form>
        </div>
    );
}

export default Question;