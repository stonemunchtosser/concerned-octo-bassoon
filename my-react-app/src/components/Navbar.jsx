import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Search, Phone, Handshake } from "lucide-react";
import UrsaLogo from "../images/ursamajorbearlogo.png";

import SponsorshipPackage2526 from "../images/SponsorshipPackage2526.pdf";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [showSponsorPopup, setShowSponsorPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
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
    const subject = encodeURIComponent(
      "A Message (from Ursa Major 9180 Website)"
    );
    const body = encodeURIComponent(
      "[Replace with your message. Feel free to add an attachment.]\n\nBest regards,\n[Your name and organization]"
    );
    window.location.href = `mailto:ghs.ursa.major@gmail.com?subject=${subject}&body=${body}`;

    setShowContactPopup(true);
  };

  return (
    <>
      {menuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => setMenuOpen(false)}
        />
      )}
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
                <span>Contact Us</span>
              </div>

              <div
                className="navbar-item"
                onClick={() => setShowSponsorPopup(true)}
              >
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
              <ul className={`navbar-menu ${menuOpen ? "mobile-open" : ""}`}>
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
              <div className={`mobile-dropdown ${menuOpen ? "open" : ""}`}>
                <ul className="mobile-dropdown-list">
                  <li className={active === "Home Page" ? "active" : ""}>
                    <Link
                      to="/"
                      onClick={() => setMenuOpen(false)}
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
                      onClick={() => setMenuOpen(false)}
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
                      onClick={() => setMenuOpen(false)}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        font: "inherit",
                      }}
                    >
                      Sponsors
                    </Link>
                  </li>
                  <li className={active === "Team Members & Credits" ? "active" : ""}>
                    <Link
                      to="/team-members"
                      onClick={() => setMenuOpen(false)}
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
                      onClick={() => setMenuOpen(false)}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        font: "inherit",
                      }}
                    >
                      LEGO Workshops
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="mobile-dropdown-item" onClick={() => { handleContactClick(); setMenuOpen(false); }}>
                    <Phone size={18} />
                    <span>Contact Us</span>
                  </li>
                  <li className="mobile-dropdown-item" onClick={() => { setShowSponsorPopup(true); setMenuOpen(false); }}>
                    <Handshake size={18} />
                    <span>Sponsor Us</span>
                  </li>
                  <li className="mobile-dropdown-item">
                    <Search size={18} />
                    <span>Search...</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showSponsorPopup && (
        <div
          className="sponsor-popup-overlay"
          onClick={() => setShowSponsorPopup(false)}
        >
          <div
            className="sponsor-popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="sponsor-popup-close"
              onClick={() => setShowSponsorPopup(false)}
            >
              ×
            </button>
            <h2>Sponsor Our Team</h2>
            <p>
              Thank you for your interest in sponsoring Ursa Major 9180! Please
              download the sponsorship packet below and then fill out the form if
              you're interested in sponsoring us; we'll be in touch soon.
            <a
              href={SponsorshipPackage2526}
              download="SponsorshipPackage2526"
              className="sponsors-download-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Sponsorship Packet
            </a>
            </p>

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdh1TzjMFFvFMRVgju4GRjtjVUKcbO99YYn0Hot5HYZOixe_Q/viewform?embedded=true"
              width="480"
              height="300"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Sponsor Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}

      {showContactPopup && (
        <div
          className="sponsor-popup-overlay"
          onClick={() => setShowContactPopup(false)}
        >
          <div
            className="sponsor-popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="sponsor-popup-close"
              onClick={() => setShowContactPopup(false)}
            >
              ×
            </button>
            <h2>Email Client Opened</h2>
            <p>
              Your default email application should open shortly (works for
              Outlook). If it did not open, please check your device’s email
              settings (go to your settings, ensure that your default email is
              set to Outlook).
            </p>
          </div>
        </div>
      )}
    </>
  );
}
