import { useState } from "react";
import Task from "./Task";

const ProjectInfo = ({ selectedProject, setSelectedProject, setProjects }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    setSelectedProject((prevSelectedProject) => {
      let updatedSelectedProject = {
        ...prevSelectedProject,
        tasks: [...prevSelectedProject.tasks, taskInput],
      };

      setProjects((prevProjects) => {
        let updatedProjects = [...prevProjects];
        updatedProjects[updatedSelectedProject.index] = updatedSelectedProject;
        return updatedProjects;
      });

      return updatedSelectedProject;
    });

    setTaskInput("");
  };

  const handleDeleteTask = (index) => {
    setSelectedProject((prevSelectedProject) => {
      let updatedSelectedProject = {
        ...prevSelectedProject,
        tasks: [...prevSelectedProject.tasks],
      };

      updatedSelectedProject.tasks.splice(index, 1);

      setProjects((prevProjects) => {
        let updatedProjects = [...prevProjects];
        updatedProjects[updatedSelectedProject.index] = updatedSelectedProject;
        return updatedProjects;
      });

      return updatedSelectedProject;
    });
  };

  const handleDelete = () => {
    setProjects((prevProjects) => {
      let updatedProjects = [...prevProjects];
      updatedProjects.splice(selectedProject.index, 1);

      setSelectedProject(null);

      return updatedProjects;
    });
  };

  return (
    <div className="m-10">
      <button
        className="pl-3 pr-3 p-1.5 hover:bg-zinc-500 rounded"
        onClick={handleDelete}
      >
        Delete
      </button>
      <h1 className="text-4xl text-stone-600 m-1">
        <strong>{selectedProject.title}</strong>
      </h1>
      <p className="text-l text-stone-400 m-1">{selectedProject.date}</p>
      <p className="text-l mt-2 mb-2 m-1">{selectedProject.description}</p>
      <hr />
      <h1 className="text-4xl text-stone-600 m-1">
        <strong>Tasks</strong>
      </h1>
      <input
        type="text"
        className="bg-zinc-300 pl-2 pr-2 p-1 ml-4 m-1"
        value={taskInput}
        onChange={handleChange}
      />
      <button
        className="hover:bg-stone-300 pl-2 pr-2 p-1 ml-4 m-1"
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <ul className="pr-2 ml-4 m-1">
        {selectedProject.tasks.map((task, index) => {
          return (
            <Task
              task={task}
              key={index}
              onClear={() => handleDeleteTask(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectInfo;
