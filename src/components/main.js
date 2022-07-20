import { useState, useEffect } from "react";
import "../styles/main.css";
import QuestionsCard from "./questionsCard";

const Main = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  return (
    <div className="main-container">
      <div className="card-grid">
        <QuestionsCard />
        <QuestionsCard />
        <QuestionsCard />
        <QuestionsCard />
      </div>
      <button className="check-btn"> Check answers</button>
    </div>
  );
};

export default Main;
