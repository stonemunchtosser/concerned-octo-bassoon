import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Search, Phone, Handshake } from "lucide-react";
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
      case "/team-members":
        setActive("Team Members & Credits");
        break;
      case "/lego-workshops":
        setActive("LEGO Workshops");
        break;
      default:
        setActive("");
    }
  }, [location]);

  const handleContactClick = () => {
    const subject = encodeURIComponent("A Message (from Ursa Major 9180 Website)");
    const body = encodeURIComponent(
      "[Replace with your message. Feel free to add an attachment.]\n\nBest regards,\n[Your name and organization]"
    );
    window.location.href = `mailto:ghs.ursa.major@gmail.com?subject=${subject}&body=${body}`;
  };

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
            <div className="navbar-item" onClick={handleContactClick}>
              <Phone size={18} />
              <span>Contact Us (Open w/Email)</span>
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
              <li className={active === "Home Page" ? "active" : ""}>
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
              <li className={active === "About Us" ? "active" : ""}>
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
              <li className={active === "Sponsors" ? "active" : ""}>
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
                className={active === "Team Members & Credits" ? "active" : ""}
              >
                <Link
                  to="/team-members"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    font: "inherit",
                  }}
                >
                  Team Members & Credits
                </Link>
              </li>
              <li className={active === "LEGO Workshops" ? "active" : ""}>
                <Link
                  to="/lego-workshops"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    font: "inherit",
                  }}
                >
                  LEGO Workshops
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
