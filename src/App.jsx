import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const goodClicks = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
  };

  const neutralClicks = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(updatedNeutral + good + bad);
  };

  const badClicks = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(updatedBad + good + neutral);
  };
  let average = 0;
  let positive = 0;
  if (total !== 0) {
    average = (good - bad) / total;
    positive = (good / total) * 100;
  }

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
      <h3>all {total}</h3>
      <h3>average {average}</h3>
      <h3>positive {positive} %</h3>
    </div>
  );
};

export default App;
