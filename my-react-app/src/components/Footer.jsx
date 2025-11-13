import React from "react";
import { MapPin, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-left">
          <h3>Ursa Major 9180 Robotics</h3>
          <p>
            Grandview Heights Secondary School <br />
            Surrey, BC, Canada
          </p>
          <p className="footer-contact">
            <Mail size={18} /> <a href="mailto:ursamajorfrc9180@gmail.com">ghs.ursa.major@gmail.com</a>
          </p>
        </div>

        <div className="footer-center">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <a href="https://www.instagram.com/ghs_ursa_major/?hl=en" target="_blank" rel="noopener noreferrer">
              <Instagram size={22} />
            </a>
            <a href="https://www.facebook.com/people/Ursa-Major/61570890107711/?_rdr" target="_blank" rel="noopener noreferrer">
              <Facebook size={22} />
            </a>
            <a href="https://www.youtube.com/channel/UCpeVRFZPQH5kokRJV61n31w" target="_blank" rel="noopener noreferrer">
              <Youtube size={22} />
            </a>
            <a href="https://github.com/9180-GHS-Ursa-Major" target="_blank" rel="noopener noreferrer">
              <FaGithub size={22} />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h4>Location</h4>
          <p className="footer-location">
            <MapPin size={18} /> BC, Canada
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ursa Major 9180 Robotics, made by Hexuan (Nina) Liu. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
