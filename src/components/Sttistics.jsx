const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad;
  let average = 0;
  let positive = 0;
  if (total !== 0) {
    average = (props.good - props.bad) / total;
    positive = (props.good / total) * 100;
  }
  return (
    <div>
      <h3>good {props.good}</h3>
      <h3>neutral {props.neutral}</h3>
      <h3>bad {props.bad}</h3>
      <h3>all {total}</h3>
      <h3>average {average}</h3>
      <h3>positive {positive} %</h3>
    </div>
  );
};

export default Statistics;
