import { useEffect, useState } from "react";
import moment from "moment";

const Clock = ({ id, name, timezoneOffset, removeClock }) => {
  const [time, setTime] = useState(
    moment().utcOffset(timezoneOffset).format("HH:mm:ss")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().utcOffset(timezoneOffset).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezoneOffset]);

  return (
    <div>
      <h2>{name}</h2>
      <p>{time}</p>
      <button onClick={() => removeClock(id)}>Удалить</button>
    </div>
  );
};

export default Clock;
