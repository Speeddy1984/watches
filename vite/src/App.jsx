import { useState } from "react";
import "./App.css";
import Clock from "./components/Watches/Clock";
import ClockForm from "./components/Watches/ClockForm";

const App = () => {
  const [clocks, setClocks] = useState([]);

  const addClock = (name, timezoneOffset) => {
    setClocks([...clocks, { id: Date.now(), name, timezoneOffset }]);
  };

  const removeClock = (id) => {
    setClocks(clocks.filter((clock) => clock.id !== id));
  };

  return (
    <div>
      <h1>World Clocks</h1>
      <ClockForm addClock={addClock} />
      <div className="row">
        {clocks.map((clock) => (
          <Clock
            key={clock.id}
            id={clock.id}
            name={clock.name}
            timezoneOffset={clock.timezoneOffset}
            removeClock={removeClock}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
