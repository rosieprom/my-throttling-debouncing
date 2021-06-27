import React, { useState, useEffect } from "react";
import "./searchBar.css";
import _ from "lodash";

const SearchBar = ({}) => {
  const [value, setValue] = useState("");
  const [debounced, setDebounced] = useState('aqua');
  const [throttled, setThrottled] = useState('aqua');

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
  }, 500)

  const handleChange = (event: any) => {
    setValue(event.target.value);
    debounceFunc(event.target.value);
    throttledFunc(event.target.value);
  };

  return (
    <div>
      <div>
        <p>Type in any color</p>
        <input value={value} onChange={handleChange}/>
      </div>
      <div>
      <br />
        Debounced:
        <div className="square" style={{ backgroundColor:  debounced }} />
        <p>{debounced}</p>
        <br />
        Throttled:
        <div className="square" style={{ backgroundColor:  throttled }} />
        <p>{throttled}</p>
      </div>
    </div>
  );
};

export default SearchBar;
