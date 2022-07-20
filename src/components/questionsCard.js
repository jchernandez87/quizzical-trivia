import "../styles/questionsCard.css";
import { nanoid } from 'nanoid'

const QuestionCard = (props) => {
  
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  const randomArr = shuffleArray(props.answers);

  const testing = randomArr.map(item => <span key={nanoid()}>{item}</span>)

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
