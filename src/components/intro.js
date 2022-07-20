import "../styles/intro.css";

const Intro = (props) => ((
  <div className="intro-container">
    <h1>Quizzical</h1>
    <p>Test your knowledge !</p>
    <button onClick={props.toggle} className="intro-btn">Start quiz</button>
  </div>
));

export default Intro;
