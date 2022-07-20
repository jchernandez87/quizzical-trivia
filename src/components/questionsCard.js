import "../styles/questionsCard.css";
import { nanoid } from 'nanoid'

const QuestionCard = (props) => {
  const testing = props.answers.map(item => <span key={nanoid()}>{item}</span>)

  return (
    <div className="card-container">
      <h3>{props.question}</h3>
      <div className="answers-selection">
      {testing}
      </div>
    </div>
  );
};

export default QuestionCard;
