import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

const INPUT_DATA = {
  title: "",
  description: "",
  date: "",
  tasks: [],
};

const AddProject = ({ onExit }) => {
  const [inputData, setInputData] = useState(INPUT_DATA);
  const modal = useRef();

  const handleChange = (e, key) => {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [key]: e.target.value,
      };
    });
  };

  const handleExit = () => {
    if (
      inputData.title.trim() === "" ||
      inputData.date.trim() === "" ||
      inputData.description.trim() === ""
    ) {
      modal.current.open();
      return;
    } else {
      onExit("add", inputData);
    }
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
        <p className="text-stone-400 mb-4">You did not entered all values</p>
        <p className="text-stone-400 mb-4">
          Please, make sure you provide a valid value for all input fields
        </p>
      </Modal>
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
            onClick={handleExit}
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
    </>
  );
};

export default AddProject;
