import React from 'react';
import Weather from './components/Weather';
import Time from './components/Time';
import DateToday from './components/Date'

function App() {
  return (
    <div>
      <Weather />
      <Time />
      <DateToday />
    </div>
  );
}

export default App;
