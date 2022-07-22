import "../styles/questionsCard.css";

const QuestionCard = (props) => {
  const answersList = props.answers.map((item) => {
    const backColor = () => {
      if (item.checked) {
        return "green";
      } else if (props.showCorrect && item.checked) {
        return "green";
      } else if (props.showCorrect && item.correct) {
        return "red";
      } else {
        return " transparent";
      }
    };

    return (
      <span
        onClick={(event) => props.toggle(event, item.id, props.parentId)}
        className={backColor()}
        key={item.id}
        text={item.text}
        checked={item.checked}
      >
        {item.text}
      </span>
    );
  });

  return (
    <div className="card-container">
      <h3>{props.question}</h3>
      <div className="answers-selection">{answersList}</div>
    </div>
  );
};

export default QuestionCard;
