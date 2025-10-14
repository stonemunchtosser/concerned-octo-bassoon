import { useState } from "react";
import { Link } from "react-router-dom"; 
import "./AboutUs.css";
import Navbar from "./Navbar";
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

          <div className="aboutpage-collapsible-sections">
            <div
              className="aboutpage-collapsible"
              onClick={() => toggleSection("story")}
            >
              <h2>+ FRC Team</h2>
              {openSection === "story" && (
                <p>
                  Our team has been competing since 2023, participating in{" "}
                  <strong>Charged UP</strong>, <strong>Crescendo</strong>, and{" "}
                  <strong>Reefscape</strong>. We compete at the{" "}
                  <strong>Canadian Pacific Regional</strong> every year, which
                  was previously held at the Save-On-Foods Memorial Centre in
                  Victoria and, starting in 2025, now takes place at the{" "}
                  <strong>Pacific Coliseum</strong> in Vancouver, BC. Around 30
                  to 50 teams from across the world participate annually.
                  <br />
                  <br />
                  During our first season, Charged UP, we ranked #5 overall and
                  reached the finals alongside our alliance partners 4253 and
                  8338. We also advanced to the World Championships in Houston,
                  Texas. To learn more about our Charged UP season, click{" "}
                  <Link
                    to="/chargedup"
                    style={{ color: "#00ff66", textDecoration: "none" }}
                  >
                    here
                  </Link>
                  .
                  <br />
                  <br />
                  In our second season, Crescendo, we ranked #6 overall and
                  became Alliance Captain #4, allowing us to select our own
                  alliance partners—6390 and 9449. Although we didn’t advance as
                  far as we hoped, we gained valuable experience for the future.
                  To learn more about our Crescendo season, click{" "}
                  <Link
                    to="/crescendo"
                    style={{ color: "#00ff66", textDecoration: "none" }}
                  >
                    here
                  </Link>
                  .
                  <br />
                  <br />
                  Our third season is the current challenge,{" "}
                  <strong>Reefscape</strong>, where teams must place coral onto
                  reefs and remove algae to maintain them. To learn more about
                  Reefscape, click{" "}
                  <Link
                    to="/reefscape"
                    style={{ color: "#00ff66", textDecoration: "none" }}
                  >
                    here
                  </Link>
                  .
                </p>
              )}
            </div>

            <div
              className="aboutpage-collapsible"
              onClick={() => toggleSection("mission")}
            >
              <h2>+ FLL Team</h2>
              {openSection === "mission" && (
                <p>
                  The FIRST LEGO League (FLL) is a robotics program organized by
                  FIRST Robotics, designed to introduce children ages 4–14 to
                  the world of robotics and STEM learning.
                  <br />
                  <br /> We’re proud to have hosted FLL teams at our school for
                  the past three years. Our two teams are 49449 and 49371.
                  <br />
                  <br /> During the 2022–2023 “Superpowered” season, our
                  all-girls team of seven members earned the Core Values Award
                  at the Lower Mainland Qualifier 2.
                  <br />
                  <br /> In the following “Masterpiece” season, we expanded to
                  two FLL teams with a total of 15 members, and both teams
                  advanced to regionals in Maple Ridge.
                  <br />
                  <br /> For the 2024–2025 “Submerged” season, we had two teams
                  with 11 members in total, and in 2025, we were proud to host
                  the Lower Mainland Qualifier 2 at our school with 20 FLL teams
                  from across the region!
                </p>
              )}
            </div>

            <div
              className="aboutpage-collapsible"
              onClick={() => toggleSection("values")}
            >
              <h2>+ Third Section Idk Yet</h2>
              {openSection === "values" && (
                <p>
                  not sure if we have anything else to put yet but imma just
                  leave this here until further notice
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
