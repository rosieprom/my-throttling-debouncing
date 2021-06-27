import React from "react";
import "./App.css";
import SearchBar from "./components/searchBar";


const App = ({ }) => {
  return (
    <div className="App">
      <h1 className="heading">Debouncing and Throttling in CSS and React</h1>
      <div className="section">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
