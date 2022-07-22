import { useState } from "react";
import he from "he";
import "../styles/questionsCard.css";
import Answer from "./answer";

const QuestionCard = (props) => {


  // const randomArr = shuffleArray(answers);

  // const toggle = (event, id) => {
  //   event.stopPropagation();
  //   setAnswers(prevAnswers =>
  //     prevAnswers.map((item) =>
  //       item.id === id ? { ...item, checked: !item.checked } : { ...item, checked: false}
  //     )
  //   );
  // };

  const answersList = props.answers.map((item) => (
    <Answer
      // toggle={(event) => toggle(event, item.id)}
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
