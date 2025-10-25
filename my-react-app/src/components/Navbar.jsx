import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Search, Calendar, Phone, Handshake } from "lucide-react";
import UrsaLogo from "../images/ursamajorbearlogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActive("Home Page");
        break;
      case "/about":
        setActive("About Us");
        break;
      case "/first":
        setActive("About FIRST®");
        break;
      case "/sponsors":
        setActive("Sponsors");
        break;
      case "/social":
        setActive("Social Handles");
        break;
      case "/additional-resources":
        setActive("Social Handles");
        break;
      default:
        setActive("");
    }
  }, [location]);

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
              <li
                className={active === "Home Page" ? "active" : ""}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    font: "inherit",
                  }}
                >
                  Home Page
                </Link>
              </li>
              <li
                className={active === "About Us" ? "active" : ""}
              >
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    font: "inherit",
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className={active === "About FIRST®" ? "active" : ""}>
                <a
                  href="https://www.firstinspires.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    font: "inherit",
                  }}
                >
                  About FIRST®
                </a>
              </li>
              <li
                className={active === "Sponsors" ? "active" : ""}
              >
                <Link
                  to="/sponsors"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    font: "inherit",
                  }}
                >
                  Sponsors
                </Link>
              </li>
              <li
                className={active === "Social Handles" ? "active" : ""}
              >
                <Link
                  to="/social"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    font: "inherit",
                  }}
                >
                  Social Handles
                </Link>
              </li>
              <li
                className={active === "Additional Resources" ? "active" : ""}
              >
                <Link
                  to="/frc"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    font: "inherit",
                  }}
                >
                  Additional Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
