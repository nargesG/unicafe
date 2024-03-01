import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClicks = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const neutralClicks = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const badClicks = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClicks} text="good" />
      <Button handleClick={neutralClicks} text="neutral" />
      <Button handleClick={badClicks} text="bad" />
      <h1>statistics</h1>
      <h3>good {good}</h3>
      <h3>neutral {neutral}</h3>
      <h3>bad {bad}</h3>
    </div>
  );
};

export default App;
