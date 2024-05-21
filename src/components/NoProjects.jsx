import logo from "../assets/no-projects.png";

const NoProjects = ({ onCreateNewProject }) => {
  return (
    <div className="flex flex-col items-center m-40">
      <img className="w-20 h-20 m-5" src={logo} />
      <h1 className="text-stone-600 text-2xl">
        <strong>No Project Selected</strong>
      </h1>
      <p className="text-stone-400 text-xl">
        Select a project or start with a new one
      </p>
      <button
        className="bg-stone-800 hover:bg-stone-600 text-stone-300 m-4 pl-4 pr-4 p-2 rounded-lg text-xl"
        onClick={onCreateNewProject}
      >
        Create new project
      </button>
    </div>
  );
};

export default NoProjects;
