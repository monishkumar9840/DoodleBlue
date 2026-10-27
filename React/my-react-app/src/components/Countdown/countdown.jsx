import React from "react";
import { useState, useEffect } from "react";
function Countdown() {
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  return <p>{seconds > 0 ? seconds : "Time's up!"}</p>;
}
export default Countdown;
ee