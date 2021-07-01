import React, { useState, useEffect } from "react";
import "./passwordCheck.css";
import _ from "lodash";

const PasswordCheck = ({}) => {
  const [password, setPassword] = useState("");
  const [debouncedError, setDebouncedError] = useState(false);
  const [debouncedPw, setDebouncedPw] = useState("");

  const [statusMessage, setStatusMessage] = useState("");

  const [throttledError, setThrottledError] = useState(false);
  const [throttledPw, setThrottledPw] = useState("");

  // debounced password callback
  const setDebouncedPwFunction = _.debounce((debouncedPw) => {
    setDebouncedPw(debouncedPw);
    if (debouncedPw != "correctpassword") {
      setDebouncedError(true);
    } else setDebouncedError(false);
  }, 1300);

  // debounced password callback
  const setThrottledPwFunction = _.throttle((throttledPw) => {
    setThrottledPw(throttledPw);
    if (throttledPw != "correctpassword") {
      setThrottledError(true);
    } else setThrottledError(false);
  }, 1300);

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
    setDebouncedPwFunction(event.target.value);
    setThrottledPwFunction(event.target.value);
  };

  // demo for debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (debouncedError == true) {
        setStatusMessage("Wrong password!");
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [debouncedPw]);

  return (
    <div>
      <div>
        <h2>Password:</h2>
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
        />
        <div className="row">
          <div className="col">
            {debouncedError && debouncedPw && (
              <span className="errormsg">{statusMessage}</span>
            )}
          </div>
          <div className="col">
            <h3>Throttled Password</h3>
            {throttledError && throttledPw && (
              <span className="errormsg">{statusMessage}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordCheck;
