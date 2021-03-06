import React, { useState, useEffect } from "react";
import "./searchBar.css";
import _ from "lodash";

const SearchBar = ({}) => {
  const [value, setValue] = useState("");
  const [debounced, setDebounced] = useState("aqua");
  const [throttled, setThrottled] = useState("aqua");

  // Debounce callback
  const debounceFunc = _.debounce(
    (debounced) => {
      setDebounced(debounced);
    },
    // delay in ms
    500
  );

  const throttledFunc = _.throttle((throttled) => {
    setThrottled(throttled);
  }, 500);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    debounceFunc(event.target.value);
    throttledFunc(event.target.value);
  };

  return (
    <div>
      <div>
        <h1>Changing Color of the Square</h1>
        <h2>Type in a color</h2>
        <input value={value} onChange={handleChange} />
      </div>
        <div className="row">
          <div className="col">
            <h2>Debounced</h2>
            <div className="square" style={{ backgroundColor: debounced }} />
            <p>{debounced}</p>
          </div>
          <div className="col">
            <h2>Throttled</h2>
            <div className="square" style={{ backgroundColor: throttled }} />
            <p>{throttled}</p>
          </div>
      </div>
    </div>
  );
};

export default SearchBar;
