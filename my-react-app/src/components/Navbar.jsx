import React from "react";
import "./Navbar.css";
import { Search, Calendar, Phone, Handshake } from "lucide-react";
import UrsaLogo from "../images/ursamajorbearlogo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-top">
          <div className="navbar-right">
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

        {/* Left section — aligned to bottom */}
        <div className="navbar-bottom">
          <div className="navbar-left">
            <div className="navbar-logo">
              <img
                src={UrsaLogo}
                alt="Logo"
                style={{ height: "60px", position: "relative", top: "-50px", left: "-6px" }}
              />
              <span className="subtext">URSA MAJOR 9180</span>
            </div>
            <ul className="navbar-menu">
              <li>About Us</li>
              <li>About FIRST®</li>
              <li>Our FRC Team</li>
              <li>Our FLL Team</li>
              <li>Sponsors</li>
              <li>Social Handles</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
