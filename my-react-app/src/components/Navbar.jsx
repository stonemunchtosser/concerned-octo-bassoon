import React, { useState } from "react";
import "./Navbar.css";
import { Search, Calendar, Phone, Handshake } from "lucide-react";
import UrsaLogo from "../images/ursamajorbearlogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("About Us");

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-top">
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
            <div className="navbar-item">
              <Calendar size={18} />
              <span>Events</span>
            </div>
            <div className="navbar-item">
              <Phone size={18} />
              <span>Contact Us</span>
            </div>
            <div className="navbar-item">
              <Handshake size={18} />
              <span>Sponsor Us</span>
            </div>
            <div className="navbar-item">
              <Search size={18} />
              <span>Search...</span>
            </div>
          </div>
        </div>

        <div className="navbar-bottom">
          <div className="navbar-left">
            <div className="navbar-logo">
              <img
                src={UrsaLogo}
                alt="Ursa Major Logo"
                style={{
                  height: "60px",
                  position: "relative",
                  top: "-50px",
                  left: "-6px",
                }}
              />
              <span className="subtext">URSA MAJOR 9180</span>
            </div>
            <ul className="navbar-menu">
              {[
                "About Us",
                "About FIRST®",
                "Our FRC Team",
                "Our FLL Team",
                "Sponsors",
                "Social Handles",
              ].map((item) => (
                <li
                  key={item}
                  className={active === item ? "active" : ""}
                  onClick={() => setActive(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
