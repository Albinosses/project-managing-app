import { useState } from "react";
import Input from "./Input";

const INPUT_DATA = {
  title: "",
  description: "",
  date: "",
  tasks: [],
};

const AddProject = ({ onExit }) => {
  const [inputData, setInputData] = useState(INPUT_DATA);

  const handleChange = (e, key) => {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [key]: e.target.value,
      };
    });
  };

  return (
    <div className="h-screen flex flex-col m-5">
      <div>
        <button
          className="pl-3 pr-3 p-1.5 hover:bg-zinc-500 rounded"
          onClick={() => onExit("cancel")}
        >
          Cancel
        </button>
        <button
          className="pl-3 pr-3 p-1.5 m-3 bg-zinc-900 hover:bg-zinc-500 text-zinc-100 rounded"
          onClick={() => onExit("add", inputData)}
        >
          Save
        </button>
      </div>
      <Input
        label="Title"
        type="text"
        value={inputData.title}
        onChange={(e) => handleChange(e, "title")}
      />
      <Input
        label="Description"
        isTextarea={true}
        value={inputData.description}
        onChange={(e) => handleChange(e, "description")}
      />
      <Input
        label="Due Date"
        type="date"
        value={inputData.date}
        onChange={(e) => handleChange(e, "date")}
      />
    </div>
  );
};

export default AddProject;
