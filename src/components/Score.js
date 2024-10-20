import React from 'react';

const Score = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="celebration-container">
      <div className="celebration-message">
        <h2>🎉 Quiz Complete! 🎉</h2>
        <p>{`Your score: ${score} out of ${totalQuestions}`}</p>
        <button onClick={onRestart} className="restart-btn">Restart Quiz</button>
      </div>
      {/* Flower sprinklers */}
      <div className="flowers">
        <div className="flower"></div>
        <div className="flower"></div>
        <div className="flower"></div>
        <div className="flower"></div>
        <div className="flower"></div>
      </div>
    </div>
  );
};

export default Score;
