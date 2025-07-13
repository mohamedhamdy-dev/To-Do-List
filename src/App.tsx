import Tasks from "./Tasks/Tasks";
import Header from "./UI/Header";

function App() {
  return (
    <div className="bg-gray-300 py-5">
      <div className="container mx-auto">
        <Header />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
