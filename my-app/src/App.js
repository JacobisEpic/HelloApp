import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import logo from './logo.svg';
import './App.css';

function App() {
  // Create a state variable for the current time
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Update the current time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello App!!
        </p>
        <p>{currentTime}</p> {/* Display the current time */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
