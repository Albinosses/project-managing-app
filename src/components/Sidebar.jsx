const Sidebar = ({ projects }) => {
  return (
    <aside className="h-screen flex flex-col items-center font-serif bg-slate-950 rounded-xl">
      <h1 className="text-2xl text-slate-50 rounded m-4 p-1">Your projects</h1>
      <button className="bg-stone-700 text-stone-400 rounded m-4 p-1 hover:bg-stone-800">
        + Add Project
      </button>
      <div className="text-stone-400">
        {projects.length > 0 &&
          projects.map((project, index) => {
            return (
              <div
                className="m-2  hover:bg-stone-600 rounded-xl p-2"
                key={index}
              >
                {project.title}
              </div>
            );
          })}
      </div>
    </aside>
  );
};

export default Sidebar;
