import AddProject from "./components/AddProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <AddProject />
      </div>
    </div>
  );
}

export default App;
