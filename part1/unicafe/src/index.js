import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Table = ({ data }) => {
  const groupBy = (list, keyGetter) => {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  };
  const sum = data
    .map((elem) => {
      return elem === "good" ? 1 : elem === "neutral" ? 0 : -1;
    })
    .reduce((a, b) => {
      return a + b;
    });
  const positives = data
    .map((elem) => {
      return elem === "good" ? 1 : 0;
    })
    .reduce((a, b) => {
      return a + b;
    });
  return (
    <table>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{groupBy(data, (st) => st).get("good")?.length}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{groupBy(data, (st) => st).get("neutral")?.length}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{groupBy(data, (st) => st).get("bad")?.length}</td>
        </tr>
        <tr>
          <td>Totals</td>
          <td>{data.length}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{sum / data.length}</td>
        </tr>
        <tr>
          <td>positives</td>
          <td>{(positives / data.length) * 100} %</td>
        </tr>
      </tbody>
    </table>
  );
};
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const NoStatistic = () => {
  return <p>No feedback given yet!</p>;
};
const Statistic = ({ statistics }) => {
  return <Table data={statistics} />;
};
const App = () => {
  const [statistics, setStatistics] = useState([]);
  const handleClickGood = () => {
    setStatistics(statistics.concat("good"));
  };
  const handleClickNeutral = () => {
    setStatistics(statistics.concat("neutral"));
  };
  const handleClickBad = () => {
    setStatistics(statistics.concat("bad"));
  };
  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      <h1>Statistics</h1>
      {statistics.length === 0 ? (
        <NoStatistic />
      ) : (
        <Statistic statistics={statistics} />
      )}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
