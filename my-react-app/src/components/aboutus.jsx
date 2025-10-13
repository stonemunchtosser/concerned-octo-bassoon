import { useState } from "react";
import "./AboutUs.css"; // renamed file so it’s unique
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg1 from "../images/bearconsimage.jpg";

export default function AboutUs() {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="aboutpage-app">
      <Navbar />
      <section className="aboutpage-hero">
        <div className="aboutpage-image-wrapper">
          <img src={bg1} alt="Ursa Major" className="aboutpage-bg" />
          <div className="aboutpage-overlay"></div>
        </div>

        <div className="aboutpage-hero-content">
          <h1 className="aboutpage-title">
            About <br /> Ursa Major 9180
          </h1>

          {/* Collapsible Sections */}
          <div className="aboutpage-collapsible-sections">
            <div
              className="aboutpage-collapsible"
              onClick={() => toggleSection("story")}
            >
              <h2>+ FRC Team</h2>
              {openSection === "story" && (
                <p>
                Our team has been competing since 2023, participating in Charged UP, 
                Crescendo, and soon, Reefscape. Each year, we compete at the Canadian 
                Pacific Regional, which was previously held at the Save-On-Foods 
                Memorial Centre in Victoria, BC. Starting in 2025, however, the event 
                will take place at the Pacific Coliseum in Vancouver, BC. At the 
                Canadian Pacific Regional, around 30 to 50 teams from across the world 
                participate annually. <br /><br />During our first season, 
                Charged UP, we ranked #5 overall and reached the finals alongside our 
                alliance partners 4253 and 8338. We also advanced to the World Championships 
                in Houston, Texas, where we competed against hundreds of the best teams 
                from around the globe. To learn more about our Charged UP season, click here. <br /><br />
                In our second season, Crescendo, we ranked #6 overall and became Alliance 
                Captain #4, allowing us to select our own alliance partners—6390 and 9449. 
                Although we didn’t advance as far as we hoped, we gained valuable experience 
                and learned how to improve in future competitions. To learn more about our 
                Crescendo season, click here. <br /><br /> Our third season is the current challenge, 
                Reefscape, where teams must place coral onto reefs and remove algae to maintain 
                them. To learn more about Reefscape, click here.
                </p>
              )}
            </div>

            <div
              className="aboutpage-collapsible"
              onClick={() => toggleSection("mission")}
            >
              <h2>+ Our Mission</h2>
              {openSection === "mission" && (
                <p>
                  At Ursa Major, we strive to make STEM approachable and
                  exciting. Through workshops, LEGO Robotics Camps, and outreach
                  events, our goal is to spark curiosity and help students
                  discover teamwork and innovation.
                </p>
              )}
            </div>

            <div
              className="aboutpage-collapsible"
              onClick={() => toggleSection("values")}
            >
              <h2>+ Our Core Values</h2>
              {openSection === "values" && (
                <ul className="aboutpage-values-list">
                  <li>
                    <strong>Teamwork</strong> — We achieve more together.
                  </li>
                  <li>
                    <strong>Innovation</strong> — We approach challenges
                    creatively.
                  </li>
                  <li>
                    <strong>Community</strong> — We inspire future engineers.
                  </li>
                  <li>
                    <strong>Gracious Professionalism</strong> — We respect all.
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
