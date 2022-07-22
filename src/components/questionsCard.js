import { useState } from "react";
import he from "he";
import "../styles/questionsCard.css";
import Answer from "./answer";

const QuestionCard = (props) => {
  const [answers, setAnswers] = useState(props.answers);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  // const randomArr = shuffleArray(answers);

  const toggle = (event, id) => {
    event.stopPropagation();
    setAnswers(prevAnswers =>
      prevAnswers.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  console.log(answers)

  const answersList = answers.map((item) => (
    <Answer
      toggle={(event) => toggle(event, item.id)}
      key={item.id}
      text={he.decode(item.text)}
      checked={item.checked}
    />
  ));

  return (
    <div className="card-container">
      <h3>{props.question}</h3>
      <div className="answers-selection">{answersList}</div>
    </div>
  );
};

export default QuestionCard;
