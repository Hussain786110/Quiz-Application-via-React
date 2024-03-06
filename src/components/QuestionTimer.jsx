import { useEffect, useState } from "react";

export default function QuestionTimer({ TIMEOUT, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(TIMEOUT);

  useEffect(() => {
    const timeout = setTimeout(onTimeOut, TIMEOUT);

    return () => {
      clearTimeout(timeout);
    };
  }, [onTimeOut, TIMEOUT]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      value={remainingTime}
      max={TIMEOUT}
      id="question-time"
      className={mode}
    />
  );
}
