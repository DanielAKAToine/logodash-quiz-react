import './App.css';
import React, { useState } from 'react';
import Question from './components/Question';
import Score from './components/Score';
import img1 from './assets/Audi.jpg';
import img2 from './assets/Chevrolet.jpg';
import img3 from './assets/Mazda.jpg';
import img4 from './assets/Subaru.jpg';
import img5 from './assets/Toyota.jpg';
import img6 from './assets/Hyundai.jpg';
import img7 from './assets/Acura.jpg';
import img8 from './assets/Lexus.jpg';
import img9 from './assets/Infinity.jpg';
import img10 from './assets/Honda.jpg';
import img11 from './assets/Mercedes.jpg';
import img12 from './assets/Mitsubishi.jpg';
import img13 from './assets/Peugeot.jpg';
import img14 from './assets/Renault.jpg';
import img15 from './assets/Tesla.jpg';
import img16 from './assets/VW.jpg';



const questionList = [
  { id: 1, image: img1, letter: 'A' },
  { id: 2, image: img2, letter: 'C' },
  { id: 3, image: img3, letter: 'M' },
  { id: 4, image: img4, letter: 'S' },
  { id: 5, image: img5, letter: 'T' },
  { id: 6, image: img6, letter: 'H' },
  { id: 7, image: img7, letter: 'A' },
  { id: 8, image: img8, letter: 'L' },
  { id: 9, image: img9, letter: 'I' },
  { id: 10, image: img10, letter: 'H' },
  { id: 11, image: img11, letter: 'M' },
  { id: 12, image: img12, letter: 'M' },
  { id: 13, image: img13, letter: 'P' },
  { id: 14, image: img14, letter: 'R' },
  { id: 15, image: img15, letter: 'T' },
  { id: 16, image: img16, letter: 'V' }
];

const shuffleQuestions = (list) => {
  return [...list].sort(() => Math.random() - 0.5).slice(0, 3);
};


function App() {
  const [questions, setQuestions] = useState(() => shuffleQuestions(questionList));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = (userLetter) => {
    if (!questions[currentIdx]) return;

    const isCorrect = userLetter.toUpperCase() === questions[currentIdx].letter.toUpperCase();
    let newScore = score;

    if (isCorrect) {
      newScore += 10;
    } else {
      newScore -= 15;
    }
    setScore(newScore);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setGameOver(true);
      if (newScore > highScore) setHighScore(newScore);
    }
  }

  const resetGame = () => {
    setQuestions(shuffleQuestions(questionList));
    setCurrentIdx(0);
    setScore(0);
    setGameOver(false);
  }


  return (
    <div className="App">
      <h1>Which Letter Does This Logo Represent?</h1>
      {!gameOver ? (
        <Question
          number={currentIdx + 1}
          image={questions[currentIdx].image}
          onGuess={handleGuess}
        />
      ) : (
        <div className="game-over">
          <h2>Final Score: {score}</h2>
          <button onClick={resetGame}>Game Over! Lets Play Again!</button>
        </div>
      )}
      <Score score={score} highScore={highScore} />

    </div>
  );
}

export default App;
