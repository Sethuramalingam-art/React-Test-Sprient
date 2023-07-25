import React, { useEffect, useState } from "react";

const SimpleCounter = () => {
  const [status, setStatus] = useState("Idle");
  const randomStatusChange = () => {
    if (Math.random() < 0.5) {
      return "Success";
    } else {
      return "Failure";
    }
  };

  let timeOut;
  const handleStart = () => {
    setStatus("Start");
    timeOut = setTimeout(() => {
      setStatus(randomStatusChange());
    }, 1000);
  };

  const handleStop = () => {
    setStatus("Idle");
    clearTimeout(timeOut);
  };

  return (
    <>
      <div>{status}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

export default SimpleCounter;
