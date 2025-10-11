import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.png';
import bg3 from './images/bg3.jpg';

function App() {
  const backgrounds = [bg1, bg2, bg3];
  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="App">
      <div
        className={`bg-image ${fade ? 'fade-in' : 'fade-out'}`}
        style={{
          backgroundImage: `url(${backgrounds[currentBg]})`,
        }}
      ></div>

      <div className="overlay"></div>

      <Navbar />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'translateY(-50%)',
            color: 'white',
            zIndex: 2,
            maxWidth: '90%',
          }}
        >
          <p
            style={{
              fontSize: '1.5rem',
              marginBottom: '0.5rem',
              opacity: 0.9,
            }}
          >
            Grandview Heights Secondary School
          </p>

          <h1
            style={{
              fontSize: '7rem',
              fontWeight: 900,
              lineHeight: 1,
              margin: 0,
            }}
          >
            Ursa Major 9180 <br /> Robotics
          </h1>
        </div>

    </div>
  );
}

export default App;
