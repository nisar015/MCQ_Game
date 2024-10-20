import React from 'react';

const Question = ({ question, onAnswerSelect, currentQuestion, totalQuestions }) => {
  const handleAnswerClick = (option) => {
    const isCorrect = option === question.correctAnswer;
    onAnswerSelect(isCorrect);
  };

  return (
    <div className="question-container">
      <h2>{`Question ${currentQuestion + 1} of ${totalQuestions}`}</h2>
      <p>{question.question}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
