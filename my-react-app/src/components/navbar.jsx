import React, { useState } from "react";
import { ChevronDown, MapPin, Calculator, Phone, Briefcase, Search } from "lucide-react";
import "./navbar.css";

export default function navbar() {
  const [region, setRegion] = useState("British Columbia");

  return (
    <nav className="navbar">
      {/* Left side - Logo */}
      <div className="left">
        <div className="logo">
          <img src="/logo.svg" alt="Ursa Major Logo" className="logo-img" />
          <span className="logo-sub">WINDOWS & INSTALL PROS</span>
        </div>

        {/* Menu */}
        <ul className="menu">
          {[
            { name: "The Ursa Family" },
            { name: "Windows" },
            { name: "Doors" },
            { name: "Services" },
            { name: "For Pros" },
            { name: "How to Buy" },
          ].map((item) => (
            <li key={item.name} className="menu-item">
              <span>{item.name}</span>
              <ChevronDown className="menu-icon" />
            </li>
          ))}
        </ul>
      </div>

      {/* Right side */}
      <div className="right">
        <div className="right-item">
          <MapPin className="icon" />
          <span>{region}</span>
        </div>

        <div className="right-item">
          <Calculator className="icon" />
          <span>Rebate Calculator</span>
        </div>

        <div className="right-item">
          <Phone className="icon" />
          <span>Contact Us</span>
        </div>

        <div className="right-item">
          <Briefcase className="icon" />
          <span>Careers</span>
        </div>

        <button className="button">Book A Consultation</button>

        <Search className="search-icon" />
      </div>
    </nav>
  );
}


