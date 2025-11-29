import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/aboutus';
import Sponsors from './components/Sponsors';
import TeamMembers from './components/teamMembers'; 
import LegoWorkshops from './components/legoWorkshops';
import { MapPin } from 'lucide-react';
import Footer from "./components/Footer";

import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.png';
import bg3 from './images/bg3.jpg';

import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpeg';

import camp1 from './images/camp1.jpg';
import camp2 from './images/camp2.png';
import camp3 from './images/camp3.png';

function App() {
  const backgrounds = [bg1, bg2, bg3];
  const slides = [slide1, slide2, slide3];
  const campSlides = [camp1, camp2, camp3]; 

  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideFade, setSlideFade] = useState(true);

  const [currentCampSlide, setCurrentCampSlide] = useState(0);
  const [campSlideFade, setCampSlideFade] = useState(true);

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
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCampSlideFade(false);
      setTimeout(() => {
        setCurrentCampSlide((prev) => (prev + 1) % campSlides.length);
        setCampSlideFade(true);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [campSlides.length]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <section className="hero-section">
              <div className={`bg-image ${fade ? 'fade-in' : 'fade-out'}`}
                style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}></div>
              <div className="overlay"></div>
              <div className="hero-text">
                <p className="hero-subtext">Grandview Heights Secondary School</p>
                <h1 className="hero-title">Ursa Major 9180 <br /> Robotics</h1>
                <p className="hero-location">
                  <MapPin size={20} color="white" />
                  BC, Canada
                </p>
              </div>
            </section>
            <section className="about-section">
              <div className="about-text" style={{ marginTop: '20px' }}>
                <br />
                <h2>General Information</h2>
                <p>
                  We are Ursa Major 9180 — the robotics team of Grandview Heights Secondary School in Surrey, BC.
                  This team was formed in 2022, and we compete in the FIRST Robotics Competition (FRC) as well as
                  the FIRST Lego League (FLL). Our FRC team consists of students grade 9–12 while the FLL team
                  consists of grade 8 students.
                </p>
              </div>
              <br />
              <div
                className="about-carousel"
                style={{ marginTop: '60px' }} 
              >
                <img
                  src={slides[currentSlide]}
                  alt="Team carousel"
                  className={`carousel-image ${slideFade ? 'fade-in' : 'fade-out'}`}
                />
              </div>

            </section>
            <section className="content-section alt mirror-section">
              <div className="about-section mirror-layout">
                <div className="about-carousel">
                  <img
                    src={campSlides[currentCampSlide]}
                    alt="Saturday Camp carousel"
                    className={`carousel-image ${campSlideFade ? 'fade-in' : 'fade-out'}`}
                  />
                </div>
                <div className="about-text">
                  <h2>Saturday Camps</h2>
                  <p>
                    Our Saturday Camps are back in session! Ursa Major is hosting Saturday LEGO Robotics Camps
                    for students from Grandview Heights' Family of Schools (Edgewood, Pacific Heights, Sunnyside,
                    Morgan, and Rosemary). These fun half-day camps help students build coding, problem-solving,
                    and teamwork skills! Register{" "}
                    <a href="https://ursamajorfrc9180.com/saturday-camps/" target="_blank" rel="noopener noreferrer">
                      here
                    </a>.
                    <br /><br /><br />
                  </p>
                </div>
              </div>
            </section>
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/first" element={<div style={{padding:40}}><h2>About FIRST®</h2><p>Info about FIRST® goes here.</p></div>} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team-members" element={<TeamMembers />} /> 
        <Route path="/lego-workshops" element={<LegoWorkshops />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
