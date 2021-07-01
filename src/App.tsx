import React from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import PasswordCheck from "./components/passwordCheck";

const App = ({ }) => {
  return (
    <div className="App">
      <h1 className="heading">Debouncing and Throttling in CSS and React</h1>
      <div className="section">
        <SearchBar />
      </div>
      <div className="section">
        <PasswordCheck />
      </div>
    </div>
  );
}

export default App;
