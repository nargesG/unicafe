import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad;
  if (total !== 0) {
    return (
      <table>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine
          text="average"
          value={(props.good - props.bad) / total}
        />
        <StatisticLine
          text="positive"
          value={(props.good / total) * 100}
          text2="%"
        />
      </table>
    );
  } else return <h3>No feedback given</h3>;
};

export default Statistics;
