import "../styles/main.css";
import QuestionsCard from "./questionsCard";

const Main = () => (
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

export default Main;
