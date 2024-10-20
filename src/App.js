import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import { questions } from './data/questions';
import Question from './components/Question';
import Score from './components/Score';

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerSelection = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          currentQuestion < questions.length ? (
            <Question
              question={questions[currentQuestion]}
              onAnswerSelect={handleAnswerSelection}
              currentQuestion={currentQuestion}
              totalQuestions={questions.length}
            />
          ) : (
            <Score score={score} totalQuestions={questions.length} onRestart={handleRestart} />
          )
        }
      />
    </Routes>
  );
}

export default App;
