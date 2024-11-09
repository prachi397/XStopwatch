import React, { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [intervalTracker, setIntervalTracker] = useState(-1);

  //function to start the timer
  const handleStart = () => {
    const intervalId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    setIntervalTracker(intervalId);
  };

  //function to stop the timer
  const handleStop = () => {
    clearInterval(intervalTracker);
    setIntervalTracker(-1);
  };

  //function to reset the timer
  const handleReset = () => {
    clearInterval(intervalTracker);
    setTime(0);
    setIntervalTracker(-1);
  };

  //function to format time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      {/* conditional render the start and stop button */}
      {intervalTracker === -1 ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Stopwatch;
