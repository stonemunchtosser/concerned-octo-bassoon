import Navbar from "./Navbar";
import "../App.css"; 
import "./legoWorkshops.css"; 

import { useState } from "react";
import img1 from "../images/firsthoustonimage.jpeg";

export default function LegoWorkshops() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="lego-page">
      <Navbar />

      <section className="hero-section" style={{ height: "100vh" }}>
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${img1})` }}
        />
        <div className="overlay" />

        <div className="hero-text">
          <h1 className="hero-title">LEGO</h1>
          <h1 className="hero-title2">Workshops</h1>
          <p className="hero-location">
            Robotics workshops for students in grades 5–7
          </p>
        </div>

        <aside className="lego-side-panel">
          <div className="aboutpage-collapsible-sections">
            <div
              className="aboutpage-collapsible"
              onClick={() => toggleSection("details")}
            >
              <h2>+ Workshop Details</h2>
              {openSection === "details" && (
                <p>
                  We’re excited to announce LEGO Robotics Workshops 
                  designed to enhance students’ coding, problem-solving, 
                  and teamwork skills! Each session will accommodate up 
                  to 16 students in grades 5–7. Registration will be on 
                  a first-come, first-served basis. There is a $30 
                  participation fee, which includes pizza. Once 
                  registration is confirmed, families will 
                  receive a School Cash Online link for payment.
                </p>
              )}
            </div>

            <div
              className="aboutpage-collapsible"
              onClick={() => toggleSection("schedule")}
            >
              <h2>+ Schedule & Dates</h2>
              {openSection === "schedule" && (
                <p>
                  Currently, there are none scheduled, but please fill out the form below if you would
                  like to be notified when new workshops are announced.
                </p>
              )}
            </div>

            <div
              className="aboutpage-collapsible"
              onClick={() => toggleSection("faq")}
            >
              <h2>+ Sign Up Form</h2>
              {openSection === "faq" && (
                <div style={{ marginTop: "1rem", opacity: 0.8 }}>
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdHmA4sVxTdG-tz2lBH_vvXIeVfJjB9OfcVBP_CYGTE-qIb_w/viewform?embedded=true" 
                  width="540" height="616" frameborder="0" marginheight="0" marginwidth="0" title = "titles r stupid but im adding one to please ts">Loading…</iframe>
                    </div>
              )}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
