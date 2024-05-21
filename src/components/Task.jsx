const Task = ({ task, onClear }) => {
  return (
    <li className="flex justify-between w-1/2 bg-stone-200 p-2">
      <span>{task}</span>
      <button onClick={onClear}>Clear</button>
    </li>
  );
};

export default Task;
