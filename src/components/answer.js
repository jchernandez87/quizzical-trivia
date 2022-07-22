import '../styles/answer.css';

const answer = (props) => (
  <span className={props.checked ? "green" : "transparent"} onClick={props.toggle}>
    {props.text}
  </span>
);

export default answer;
