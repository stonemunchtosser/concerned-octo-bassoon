import { useState } from "react";
import "./Reefscape.css";
import Navbar from "./Navbar";
import bg1 from "../images/bearconsimage.jpg";

export default function Reefscape() {

  return (
    <div className="reefscape-app">
      <Navbar />
      <section className="reefscape-hero">
        <div className="reefscape-image-wrapper">
          <img src={bg1} alt="Reefscape Background" className="reefscape-bg" />
          <div className="reefscape-overlay"></div>
        </div>

        <div className="reefscape-hero-content">
          <h1 className="reefscape-title">
            FRC 2025: <br /> Reefscape
          </h1>

          <div className="reefscape-textbox">
            <p>
              This year was our team’s third year competing, and we participated
              at the <strong>Canadian Pacific Regional</strong>, now held at the{" "}
              <strong>Pacific Coliseum</strong> in Vancouver, BC.
            </p>

            <p>
              The game pieces for <strong>Reefscape</strong> were PVC pipes called{" "}
              <em>“Coral”</em> and large green bouncy balls called{" "}
              <em>“Algae.”</em> Teams had to place coral onto the reef and remove
              algae to deposit it in either the processor or net.
            </p>

            <p>
              During the first week of build season, our team brainstormed a
              design, constructed field elements, and even hosted an FLL
              competition at our school! Over the following six to seven weeks,
              we built, programmed, and practiced driving our robot.
            </p>

            <p>
              By <strong>February 28th</strong>, our robot was ready for the
              Canadian Pacific Regional, where <strong>49 teams</strong> from
              around the world—including Canada, the U.S., Taiwan, China, and
              Brazil—came to compete. Our robot successfully collected coral
              from the coral station and placed it on the trough, as well as
              levels 2 and 3.
            </p>

            <p>
              Below is the official <strong>Reefscape Game Animation</strong> to
              help visualize the challenge:
            </p>

            <div className="reefscape-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YWbxcjlY9JY"
                title="Reefscape Game Animation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
