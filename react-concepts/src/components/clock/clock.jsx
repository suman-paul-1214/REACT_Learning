import { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval); // clean up
  }, []);

  return (
    <div className="clock">
      <h1>Clock Component</h1>
      <h1
        className="time"
        style={{
          color: color,
          backgroundColor: "lightgray",
          padding: "10px",
          borderRadius: "5px",
          width: "300px",
          textAlign: "center",
        }}
      >
        {time}
      </h1>
    </div>
  );
};

export default Clock;
