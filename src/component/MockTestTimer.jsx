import { useEffect, useRef, useState } from "react";

function Timer() {
    const timeRemainingRef = useRef(2 * 60 * 60 + 30 * 60); // 2 hours and 30 minutes in seconds
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 }); // State to store time

    useEffect(() => {
      const timer = setInterval(() => {
        timeRemainingRef.current -= 1;
        const hours = Math.floor(timeRemainingRef.current / 3600);
        const minutes = Math.floor((timeRemainingRef.current % 3600) / 60);
        const seconds = timeRemainingRef.current % 60;
        setTime({ hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    const { hours, minutes, seconds } = time;

    return (
      <span id="remaining_time">
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
  export default Timer;