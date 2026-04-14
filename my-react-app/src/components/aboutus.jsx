import { useState } from "react";
import "./AboutUs.css";
import Navbar from "./Navbar";
import bg1 from "../images/bearconsimage.jpg";


export default function AboutUs() {
  const [openSection, setOpenSection] = useState(null);
  const [fakePage, setFakePage] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const openFakePage = (page) => {
    setFakePage(page);
  };

  const closeFakePage = () => {
    setFakePage(null);
    setOpenSection("story");
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

          {fakePage === "chargedup" && (
            <div className="fakepage-content">
              <h2 style={{ marginTop: "-10px" }}>Charged Up (2023)</h2>
              <p>
                Our debut season in the FRC was Charged UP. The game featured two pieces - a inflatable purple cube and a yellow cone - which teams
                had to place in specific scoring zones. During the endgame, alliances aimed to balance as many of their robots as possible on their scale.
                If you're interested about the specifics of the game, please check out the official animation{" "} 
                <span
                  style={{ color: "#00ff66", textDecoration: "none", cursor: "pointer" }}
                  onClick={() =>
                    window.open("https://www.youtube.com/watch?v=0zpflsYc4PA", "_blank", "noopener,noreferrer")
                  }
                >
                  here
                </span>
                .
                <br />
                <br />
                Since it was our first year competing, we were mainly focused on learning the fundementals of robot design and consstruction. We built a simple but fast
                robot that was efficient at picking up and shooting cubes while in motion. At the Canadian Pacific Regional in Victoria, we placed #5 overall and were
                selected as the first pick for Alliance 2 by Team 4253, alongside Team 8338. We were thrilled to take home three awards: the Highest Seeded Rookie Award,
                the Rookie Inspiration Award, and the Regional Finalist Award. We also earned a wild card, which qualified us to compete at the World Championship
                in Houston, Texas.
              </p>
              <button className="fakepage-back-btn" onClick={closeFakePage}>
                ← Back
              </button>
            </div>
          )}

          {fakePage === "crescendo" && (
            <div className="fakepage-content">
              <h2 style={{ marginTop: "-10px" }}>Crescendo (2024)</h2>
              <p>
                In our second year competing in the FIRST Robotics Competition, we took part in the Crescendo season.
                This year’s game featured foam rings called “notes,” which teams had to score in either the amplifier or the speaker.
                If you're curious about the specifics of the game, please can check out the official animation {" "} 
                <span
                  style={{ color: "#00ff66", textDecoration: "none", cursor: "pointer" }}
                  onClick={() =>
                    window.open("https://www.youtube.com/watch?v=BY_v8aHf0DA", "_blank", "noopener,noreferrer")
                  }
                >
                  here
                </span>
                .
                <br />
                <br />
                At the event, we competed alongside 36 teams from around the world - including groups from Canada, the U.S., Taiwan, China, and Brazil -
                many of whom had been in FRC for years. Despite the tough competition, we finished #6 overall and became Alliance Captain of #4,
                teaming up with 6390 and 9449 as our alliance partners.
                <br />
                <br />
                We had an incredible time meeting and learning from all the other teams, and the experience taught us so much.
                Everything we gained from this season will continue to help our team grow and improve in the years ahead!
              </p>
              <button className="fakepage-back-btn" onClick={closeFakePage}>
                ← Back
              </button>
            </div>
          )}

          {fakePage === "reefscape" && (
            <div className="fakepage-content">
              <h2 style={{ marginTop: "-10px" }}>Reefscape (2025)</h2>
              <p>
                This year was our team's third season competing in FRC,
                and we were thrilled to attend the Canadian Pacific Regional, now held at the Pacific Coliseum in Vancouver, BC!
                <br />
                <br />
                The game for this season featured two types of pieces: PVC pipes called “Coral” and
                a large green bouncy ball called “Algae.” The objective was to place the coral onto the reef
                while removing the algae and scoring it in either the processor or the net.
                <br />
                <br />
                The event brought together 49 teams from around the world - including Canada, the U.S., Taiwan, China, and Brazil!
                Our robot performed well; it able to successfully collect coral from the coral station and place in on the trough as well as level 2 and 3.
                We finished the qualification matches ranked #12 overall, and although we didn't advance to the elimination rounds,
                If you're interested in learning more about the specifics of the game, please check out the official animation{" "}
                <span
                  style={{ color: "#00ff66", textDecoration: "none", cursor: "pointer" }}
                  onClick={() => window.open("https://www.youtube.com/watch?v=YWbxcjlY9JY", "_blank", "noopener,noreferrer")}
                >
                  here
                </span>.
              </p>
              <button className="fakepage-back-btn" onClick={closeFakePage}>
                ← Back
              </button>
            </div>
          )}

          {!fakePage && (
            <div className="aboutpage-collapsible-sections">
              <div className="aboutpage-collapsible" onClick={() => toggleSection("story")}>
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
                    <span
                      style={{ color: "#00ff66", textDecoration: "none", cursor: "pointer" }}
                      onClick={() => openFakePage("chargedup")}
                    >
                      here
                    </span>
                    .
                    <br />
                    <br />
                    In our second season, Crescendo, we ranked #6 overall and
                    became Alliance Captain #4, allowing us to select our own
                    alliance partners—6390 and 9449. Although we didn’t advance as
                    far as we hoped, we gained valuable experience for the future.
                    To learn more about our Crescendo season, click{" "}
                    <span
                      style={{ color: "#00ff66", textDecoration: "none", cursor: "pointer" }}
                      onClick={() => openFakePage("crescendo")}
                    >
                      here
                    </span>
                    .
                    <br />
                    <br />
                    Our third season was <strong>Reefscape</strong>, where teams placed coral onto
                    reefs and removed algae to maintain them. To learn more about
                    Reefscape, click{" "}
                    <span
                      style={{ color: "#00ff66", textDecoration: "none", cursor: "pointer" }}
                      onClick={() => openFakePage("reefscape")}
                    >
                      here
                    </span>
                    .
                  </p>
                )}
              </div>

              <div className="aboutpage-collapsible" onClick={() => toggleSection("mission")}>
                <h2>+ FLL Team</h2>
                {openSection === "mission" && (
                  <p>
                    The FIRST LEGO League (FLL) is a robotics program organized by
                    FIRST Robotics, designed to introduce children ages 4–14 to
                    the world of robotics and STEM learning. We’re proud to have hosted FLL teams at our school for
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
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
