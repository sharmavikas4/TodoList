import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
function App() {
  return (
    <div className="main">
      <div className="card">
        <h1>Todo List</h1>
        <List />
        <Input />
      </div>
    </div>
  );
}

export default App;
