const StatisticLine = ({ text, value, text2 }) => {
  return (
    <tr>
      <td>
        <h3>{text}</h3>
      </td>
      <td>
        <h3>
          {value} {text2}
        </h3>
      </td>
    </tr>
  );
};

export default StatisticLine;
