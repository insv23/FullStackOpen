import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  // 记录每个 anecdote 的分数
  // 初始化 points 数组，长度与 anecdotes 相同，初始值为 0
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  // 生成一个min到max之间的随机整数（包括min和max）
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // 生成一个随机索引来选择一个随机的anecdote
  const selectRandomAnecdote = () => {
    const randomIndex = getRandomInt(0, anecdotes.length - 1);
    setSelected(randomIndex);
  };

  // 记录投票
  const vote = () => {
    const copy = [...points]; // 创建 points 数组的副本
    copy[selected] += 1; // 更新选中的 anecdote 的投票数
    setPoints(copy); // 更新 state
  };

  // 找到得票最多的 anecdote 的索引
  const maxVotesIndex = points.indexOf(Math.max(...points));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button handleClick={vote} text="vote" />
      <Button handleClick={selectRandomAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[maxVotesIndex]}</div>
      <div>has {points[maxVotesIndex]} votes</div>
    </div>
  );
};

export default App;
