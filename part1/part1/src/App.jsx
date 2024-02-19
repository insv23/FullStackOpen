import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <Button handleClick={setToValue(1000)} text="thousand" />
      <Button handleClick={setToValue(0)} text="reset" />
      <Button handleClick={setToValue(value + 1)} text="increment" />
    </div>
  );
};

export default App;
