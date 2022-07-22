import { useState, useEffect } from "react";
import he from "he";
import "../styles/main.css";
import QuestionsCard from "./questionsCard";
import { nanoid } from "nanoid";

const Main = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) =>
        setQuestions(
          data.results.map((item) => {
            const { incorrect_answers, correct_answer } = item;

            const answersArr = [...incorrect_answers, correct_answer];

            const modifiedAnswersArr = answersArr.map((item) => {
              const isCorrect = item === correct_answer ? true : false;

              return {
                id: nanoid(),
                text: item,
                checked: false,
                correct: isCorrect,
              };
            });

            const shuffleArray = (array) => {
              for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
              }
              return array;
            };

            const randomArr = shuffleArray(modifiedAnswersArr);

            return {
              ...item,
              id: nanoid(),
              current_answers: randomArr,
            };
          })
        )
      );
  }, []);

  const cards = questions.map((item) => {
    return (
      <QuestionsCard
        key={item.id}
        question={he.decode(item.question)}
        answers={item.current_answers}
      />
    );
  });

  return (
    <div className="main-container">
      <div className="card-grid">{cards}</div>
      <button className="check-btn">Check answers</button>
    </div>
  );
};

export default Main;
