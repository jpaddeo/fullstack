import React, { useState } from "react";
import ReactDOM from "react-dom";

const Counter = ({ counter }) => <>{counter}</>;
const CounterParity = ({ counter }) => (
  <p>{counter % 2 === 0 ? "Es Par" : "Es Impar"}</p>
);

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const EmptyClicks = () => {
  return <p>Click a button to render results</p>;
};

const ListOfClicks = ({ clicks }) => {
  debugger
  return (
    <p>
      Totals: {clicks.length} ({clicks.join(",")})
    </p>
  );
};

const AppCounter = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <>
      <Counter counter={counter} />
      <CounterParity counter={counter} />
      <Button handleClick={increaseByOne} text="Plus" />
      <Button handleClick={decreaseByOne} text="Minus" />
      <Button handleClick={setToZero} text="Zero" />
    </>
  );
};

const AppClicks = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [lettersClicks, setLettersClicks] = useState([]);

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
    setLettersClicks(lettersClicks.concat("L"));
  };
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
    setLettersClicks(lettersClicks.concat("R"));
  };

  return (
    <>
      {clicks.left}
      <Button handleClick={handleLeftClick} text="Plus Left" />
      {clicks.right}
      <Button handleClick={handleRightClick} text="Plus Right" />
      {lettersClicks.length === 0 ? (
        <EmptyClicks />
      ) : (
        <ListOfClicks clicks={lettersClicks} />
      )}
    </>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <AppCounter />
    <hr />
    <AppClicks />
  </React.StrictMode>,
  document.getElementById("root")
);
