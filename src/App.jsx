import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
