import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [size, setSize] = useState(100);
  const timeoutId = useRef(null);

  const resetSize = () => {
    setSize(100);
  };

  const handleClick = () => {
    setSize(prevSize => prevSize + 50);

    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(resetSize, 3000);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId.current);
  }, []);

  return (
    <div className="App">
      <h1>Big Ball Clicker</h1>
      <h2>Click to make big balls</h2>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        onClick={handleClick}
        style={{
          cursor: 'pointer',
          width: `${size}px`,
          transition: 'width 0.3s ease-in-out'
        }}
      />
    </div>
  );
}

export default App;
