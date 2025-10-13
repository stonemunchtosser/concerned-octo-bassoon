import { useState, useEffect } from "react";
import "../App.css"; // uses root styling
import Navbar from "./Navbar";
import Footer from "./Footer";

import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.png";
import bg3 from "../images/bg3.jpg";

import team1 from "../images/slide1.jpg";
import team2 from "../images/slide2.jpg";
import team3 from "../images/slide3.jpeg";

import camp1 from "../images/camp1.jpg";
import camp2 from "../images/camp2.png";
import camp3 from "../images/camp3.png";

export default function AboutUs() {
  const backgrounds = [bg1, bg2, bg3];
  const slides = [team1, team2, team3];
  const campSlides = [camp1, camp2, camp3];

  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideFade, setSlideFade] = useState(true);
  const [currentCampSlide, setCurrentCampSlide] = useState(0);
  const [campSlideFade, setCampSlideFade] = useState(true);

  // Background rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        setFade(true);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  // Team carousel
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

  // Camp carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCampSlideFade(false);
      setTimeout(() => {
        setCurrentCampSlide((prev) => (prev + 1) % campSlides.length);
        setCampSlideFade(true);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, [campSlides.length]);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className={`bg-image ${fade ? "fade-in" : "fade-out"}`}
          style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
        ></div>
        <div className="overlay"></div>
        <Navbar />

        <div className="hero-text">
          <p className="hero-subtext">Who We Are</p>
          <h1 className="hero-title">
            About <br /> Ursa Major 9180
          </h1>
        </div>
      </section>

      {/* Team History */}
      <section className="about-section">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2022, <strong>Ursa Major 9180</strong> is the official robotics team of
            <em> Grandview Heights Secondary School</em> in Surrey, British Columbia.  
            <br /><br />
            We are a student-led team passionate about engineering, programming, and creative problem-solving.
            Competing in the <strong>FIRST Robotics Competition (FRC)</strong> and <strong>FIRST LEGO League (FLL)</strong>,
            our mission is to inspire innovation and foster STEM education within our community.
          </p>
        </div>

        <div className="about-carousel">
          <img
            src={slides[currentSlide]}
            alt="Team"
            className={`carousel-image ${slideFade ? "fade-in" : "fade-out"}`}
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="content-section alt mirror-section">
        <div className="about-section mirror-layout">
          <div className="about-carousel">
            <img
              src={campSlides[currentCampSlide]}
              alt="Team working"
              className={`carousel-image ${campSlideFade ? "fade-in" : "fade-out"}`}
            />
          </div>

          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              At Ursa Major, we strive to make STEM approachable and exciting for everyone.
              Through workshops, Saturday LEGO Robotics Camps, and outreach events, our goal is to spark curiosity
              and help students discover the power of teamwork, innovation, and perseverance.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section">
        <div className="about-text">
          <h2>Our Core Values</h2>
          <ul className="values-list">
            <li><strong>Teamwork</strong> — We achieve more together than alone.</li>
            <li><strong>Innovation</strong> — We approach challenges with creativity and curiosity.</li>
            <li><strong>Community</strong> — We support and inspire future generations of engineers.</li>
            <li><strong>Gracious Professionalism</strong> — We compete fiercely but respect all.</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
