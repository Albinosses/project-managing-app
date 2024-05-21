import { useState } from "react";

const INPUT_DATA = {
  title: "",
  description: "",
  date: "",
};

const AddProject = () => {
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
        <button className="pl-3 pr-3 p-1.5 hover:bg-zinc-500 rounded">
          Cancel
        </button>
        <button className="pl-3 pr-3 p-1.5 m-3 bg-zinc-900 hover:bg-zinc-500 text-zinc-100 rounded">
          Save
        </button>
      </div>
      <label>Title</label>
      <input
        type="text"
        className="bg-zinc-300"
        value={inputData.title}
        onChange={(e) => handleChange(e, "title")}
      />
      <label className="mt-5">Description</label>
      <textarea
        type="text"
        className="bg-zinc-300 h-"
        value={inputData.description}
        onChange={(e) => handleChange(e, "description")}
      />
      <label className="mt-5">Due Date</label>
      <input
        type="date"
        className="bg-zinc-300"
        value={inputData.date}
        onChange={(e) => handleChange(e, "date")}
      />
    </div>
  );
};

export default AddProject;
