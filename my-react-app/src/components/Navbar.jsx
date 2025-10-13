import React, { useState } from "react";
import { Link } from "react-router-dom";
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
              <li className={active === "Home Page" ? "active" : ""} onClick={() => setActive("Home Page")}> 
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit', font: 'inherit' }}>Home Page</Link>
              </li>
              <li className={active === "About Us" ? "active" : ""} onClick={() => setActive("About Us")}> 
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', font: 'inherit' }}>About Us</Link>
              </li>
              <li className={active === "About FIRST®" ? "active" : ""} onClick={() => setActive("About FIRST®")}> 
                <Link to="/first" style={{ textDecoration: 'none', color: 'inherit', font: 'inherit' }}>About FIRST®</Link>
              </li>
              <li className={active === "Our FRC Team" ? "active" : ""} onClick={() => setActive("Our FRC Team")}> 
                <Link to="/frc" style={{ textDecoration: 'none', color: 'inherit', font: 'inherit' }}>Our FRC Team</Link>
              </li>
              <li className={active === "Our FLL Team" ? "active" : ""} onClick={() => setActive("Our FLL Team")}> 
                <Link to="/fll" style={{ textDecoration: 'none', color: 'inherit', font: 'inherit' }}>Our FLL Team</Link>
              </li>
              <li className={active === "Sponsors" ? "active" : ""} onClick={() => setActive("Sponsors")}> 
                <Link to="/sponsors" style={{ textDecoration: 'none', color: 'inherit', font: 'inherit' }}>Sponsors</Link>
              </li>
              <li className={active === "Social Handles" ? "active" : ""} onClick={() => setActive("Social Handles")}> 
                <Link to="/social" style={{ textDecoration: 'none', color: 'inherit', font: 'inherit' }}>Social Handles</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
