import { useRef, useState } from "react";
import AddProject from "./components/AddProject";
import Sidebar from "./components/Sidebar";
import NoProjects from "./components/NoProjects";
import ProjectInfo from "./components/ProjectInfo";

function App() {
  const [projectIsBeingCreated, setProjectIsBeingCreated] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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
        <Sidebar
          projects={projects}
          onCreateNewProject={handleAddProjectButton}
          setSelectedProject={setSelectedProject}
        />
      </div>
      <div className="w-4/5">
        {projectIsBeingCreated ? (
          <AddProject onExit={onExitAddProjectWindow} />
        ) : selectedProject !== null ? (
          <ProjectInfo
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            setProjects={setProjects}
          />
        ) : (
          <NoProjects onCreateNewProject={handleAddProjectButton} />
        )}
      </div>
    </div>
  );
}

export default App;
