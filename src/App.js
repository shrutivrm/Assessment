import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import CollegeTable from "./Components/College";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <CollegeTable />
    </div>
  );
}

export default App;
