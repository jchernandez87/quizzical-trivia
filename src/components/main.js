import { useState, useEffect } from "react";
import he from "he";
import "../styles/main.css";
import QuestionsCard from "./questionsCard";

const Main = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  const cards = questions.map((item) => {
    const { incorrect_answers, correct_answer } = item;

    const localArr = () => [...incorrect_answers, correct_answer];

    return (
      <QuestionsCard
        key={questions.indexOf(item)}
        question={he.decode(item.question)}
        correctAnswer={item.correct_answer}
        answers={localArr()}
      />
    );
  });

  return (
    <div className="main-container">
      <div className="card-grid">{cards}</div>
      <button className="check-btn"> Check answers</button>
    </div>
  );
};

export default Main;
