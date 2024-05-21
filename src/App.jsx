import { useState } from "react";
import AddProject from "./components/AddProject";
import Sidebar from "./components/Sidebar";
import NoProjects from "./components/NoProjects";
import ProjectInfo from "./components/ProjectInfo";

function App() {
  const [projectIsBeingCreated, setProjectIsBeingCreated] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(undefined);
  const [projects, setProjects] = useState([]);

  const onExitAddProjectWindow = (action, data) => {
    setProjectIsBeingCreated(false);
    if (action === "add") {
      setProjects((prevProjects) => {
        return [...prevProjects, data];
      });
    }
  };

  const handleAddProjectButton = () => {
    setProjectIsBeingCreated(true);
  };

  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar projects={projects} />
      </div>
      <div className="w-4/5">
        {projectIsBeingCreated ? (
          <AddProject onExit={onExitAddProjectWindow} />
        ) : selectedProjectIndex ? (
          <ProjectInfo />
        ) : (
          <NoProjects onCreateNewProject={handleAddProjectButton} />
        )}
      </div>
    </div>
  );
}

export default App;
