import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const [time, setTime] = useState(props.time); // Set initial time (in seconds)
  const [isRunning, setIsRunning] = useState(false);

  // Effect to handle the countdown
  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 6*10000);
    }
    // Cleanup the interval on component unmount or when time changes
    return () => clearInterval(timer);
  }, [isRunning, time]);

  // Reset Timer
  const resetTimer = () => {
    setTime(props.time); // Reset to initial value
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold mb-4">Countdown Timer</h1>
        <div className="text-xl font-bold mb-6">
          {time}min
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3 py-3 font-semibold text-white rounded-md focus:outline-none ${
              isRunning ? 'bg-red-500' : 'bg-green-500'
            }`}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={resetTimer}
            className="px-3 py-3 font-semibold bg-blue-500 text-white rounded-md focus:outline-none"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
