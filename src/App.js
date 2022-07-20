import "./App.css";
import { useState } from "react";
import Main from "./components/main";
import Intro from "./components/intro";

function App() {
  const [play, setPlay] = useState(false);

  const toggle = () => setPlay((prevState) => !prevState);

  return (
    <div className="App">
      {play ? <Main /> : <Intro toggle={() => toggle()} />}
    </div>
  );
}

export default App;
