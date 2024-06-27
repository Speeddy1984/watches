import { useState } from 'react';

const ClockForm = ({ addClock }) => {
  const [name, setName] = useState('');
  const [timezoneOffset, setTimezoneOffset] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addClock(name, parseInt(timezoneOffset, 10));
    setName('');
    setTimezoneOffset('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Название"
        required
      />
      <input
        type="number"
        value={timezoneOffset}
        onChange={(e) => setTimezoneOffset(e.target.value)}
        placeholder="Временная зона (в часах)"
        required
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default ClockForm;