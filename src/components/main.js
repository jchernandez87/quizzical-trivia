import { useState, useEffect } from "react";
import he from "he";
import "../styles/main.css";
import QuestionsCard from "./questionsCard";
import { nanoid } from "nanoid";

const Main = () => {
  const [questions, setQuestions] = useState([]);
  const [showResult, setShowResult] = useState()
  const [newGame, setNewGame] = useState();

  useEffect(() => {
    const url = "https://opentdb.com/api.php?amount=4&category=12&type=multiple";

    setNewGame(false)
    setShowResult(false)  

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const myItems = data.results.map((item) => {
          const { incorrect_answers, correct_answer } = item;

          const answersArr = [...incorrect_answers, correct_answer];

          const modifiedAnswersArr = answersArr.map((item) => {
            const isCorrect = item === correct_answer ? true : false;

            return {
              id: nanoid(),
              text: he.decode(item),
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
        });
        setQuestions(myItems);
      });
  }, [newGame]);

  console.log(questions)

  useEffect(() => {
    setShowResult(false)
  }, [newGame])

  const toggle = (event, id, parentId) => {
    event.stopPropagation();
    setQuestions((prevQuestions) =>
      prevQuestions.map((parent) => {
        const newAnswers = parent.current_answers.map((answer) =>
          answer.id === id
            ? { ...answer, checked: !answer.checked }
            : { ...answer, checked: false }
        );

        return parent.id === parentId
          ? {
              ...parent,
              current_answers: newAnswers,
            }
          : parent;
      })
    );
  };

  const cards = questions.map((item) => {
    return (
      <QuestionsCard
        showCorrect={showResult}
        parentId={item.id}
        key={item.id}
        question={he.decode(item.question)}
        answers={item.current_answers}
        toggle={toggle}
      />
    );
  });

  const result = () => {
    let result = 0;

    for (let i = 0; i < questions.length; i++) {
      const answer = questions[i];
      const { correct_answer } = answer;
      const answers = answer.current_answers;
      for (let j = 0; j < answers.length; j++) {
        const currentAnswer = answers[j];
        if (
          currentAnswer.text === correct_answer &&
          currentAnswer.checked === true
        ) {
          result = result + 1;
        }
      }
    }
    return result;
  };

  const checkAnswers = () => {
    setShowResult(true)
  };

  const anotherRound = () => {
    setNewGame(true)
  }

  return (
    <div className="main-container">
      <div className="card-grid">{cards}</div>
      {!showResult && (
        <button onClick={checkAnswers} className="check-btn">
          Chek Answers
        </button>
      )}
      {showResult && (
        <div className="result">
          <p className="score">{`You scored ${result()}/4 correct answers`}</p>
          <button onClick={anotherRound} className="check-btn">"New Game</button>
        </div>
      )}
    </div>
  );
};

export default Main;
