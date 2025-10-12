import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { MapPin } from 'lucide-react';

import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.png';
import bg3 from './images/bg3.jpg';

import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpeg';

function App() {
  const backgrounds = [bg1, bg2, bg3];
  const slides = [slide1, slide2, slide3];

  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideFade, setSlideFade] = useState(true);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setSlideFade(true);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="App">
      <section className="hero-section">
        <div
          className={`bg-image ${fade ? 'fade-in' : 'fade-out'}`}
          style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
        ></div>
        <div className="overlay"></div>
        <Navbar />

        <div className="hero-text">
          <p className="hero-subtext">Grandview Heights Secondary School</p>
          <h1 className="hero-title">
            Ursa Major 9180 <br /> Robotics
          </h1>
          <p className="hero-location">
            <MapPin size={20} color="white" />
            BC, Canada
          </p>
        </div>
        
      </section>

      <section className="about-section">
        <div className="about-text">
          <h2>About Our Team</h2>
          <p>
            We are Ursa Major 9180 — the robotics team of Grandview Heights Secondary School in Surrey, BC.
            This team was formed in 2022, and we compete in the FIRST Robotics Competition (FRC) as well as
            the FIRST Lego League (FLL). Our FRC team consists of students grade 9-12 while the FLL team
            consists of grade 8 students.
          </p>
        </div>

        <div className="about-carousel">
          <img
            src={slides[currentSlide]}
            alt="Team carousel"
            className={`carousel-image ${slideFade ? 'fade-in' : 'fade-out'}`}
          />
        </div>
      </section>

      <section className="content-section alt">
        <h2>Our Projects</h2>
        <p>
          Explore our past and ongoing robotics projects — from competition robots to STEM outreach.
        </p>
      </section>
    </div>
  );
}

export default App;
