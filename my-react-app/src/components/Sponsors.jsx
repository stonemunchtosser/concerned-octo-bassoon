import React, { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import "../components/Sponsors.css";

import heroImage from "../images/bg1.jpg"; 

import wingsbadminton from "../images/sponsor1.webp";
import sponsor2 from "../images/sponsor2.jpg";
import sponsor3 from "../images/sponsor3.jpg";
import sponsor4 from "../images/sponsor4.jpg";
import sponsor5 from "../images/sponsor5.png";
import sponsor6 from "../images/sponsor6.png";
import sponsor7 from "../images/sponsor7.jpg";
import sponsor8 from "../images/sponsor8.jpg";
import argosy from "../images/argosy.png";
import finning from "../images/finning.jpg";
import homelife from "../images/homelife.png";

export default function Sponsors() {

  const [activeYear, setActiveYear] = useState("2025");

  const sponsors2023 = [
    { logo: sponsor2, link: "https://wingsbadminton.com/", description: "JEA is a full-service land development consultation firm serving Vancouver Island and extends throughout British Columbia. It is the largest home-grown land development consultation company on Vancouver Island and offers both surveying and engineering services saving clients time, trouble and money." },
    { logo: argosy, link: "https://www.argosyfnd.org/", description: "The Argosy Foundation emphasizes process in structuring its partnerships. They have a due-diligence approach that looks for the most effective, leveraged means of making charitable investments." },
    { logo: finning, link: "https://www.finning.com/en_CA.html", description: "Finning is a local dealer for CAT equipment and machines built to handle work in Western Canada." },
    { logo: homelife, link: "https://www.homelifewhiterock.ca/", description: "Homelife prides itself on enlisting the latest in technology and training. Equipment and software are regularly updated and service by company technicians." },
  ];

  const sponsors2024 = [
    { logo: wingsbadminton, link: "https://wingsbadminton.com/", description: "Wing’s Badminton is the first of its kind in British Columbia and has introduced the 'China Olympic Team Training Method' and technique to Canada." },
    { logo: sponsor2, link: "https://jeanderson.com/", description: "Wing’s Badminton is the first of its kind in British Columbia and has introduced the 'China Olympic Team Training Method' and technique to Canada." },
    { logo: sponsor3, link: "https://comfortcarevetlangley.com/", description: "Comfort + Care Animal Hospital is pleased to serve Langley, BC and the surrounding areas. Their goal is to create a fear-free and comforting veterinary hospital that pets will love to visit." },
    { logo: sponsor4, link: "https://www.drdalemachine.com/", description: "Dr. Dale Machine and their team of skilled & experienced dental health professionals share a dedication to compassionate patient care. Their modern office is warm and inviting, designed to put one at ease during an appointment." },
    { logo: sponsor5, link: "https://www.affinity-group.ca/", description: "Affinity is a comprehensive technical consulting firm that takes a unique approach to consulting. Their mission is to deliver an unrivalled experience for their employees, consultants, and clients." },
    { logo: sponsor6, link: "https://www.soneparcanada.com/", description: "Sonepar is an independent family-owned company with global market leadership in B-to-B distribution of electrical products, solutions and related services." },
    { logo: sponsor7, link: "https://www.ultimatepcb.com/", description: "OverflyPacific Corp prides itself as a company that meets client needs and always ready to satisfy customers turnkey requirements with quality materials and technologies in the market." },
    { logo: sponsor8, link: "https://creeksidemillworks.com/", description: "Creekside Millworks specializes in manufacturing and installing residential, commercial and industrial millwork." },
  ];

  const sponsors2025 = [
    { logo: wingsbadminton, link: "https://wingsbadminton.com/", description: "Wing’s Badminton is the first of its kind in British Columbia and has introduced the 'China Olympic Team Training Method' and technique to Canada." },
  ];

  const sponsorPages = {
    "2023": sponsors2023,
    "2024": sponsors2024,
    "2025": sponsors2025,
  };

  const years = ["2023", "2024", "2025"];

  return (
    <div className="sponsors-container">
      <Navbar />

      <section className="sponsors-hero">
        <div
          className="sponsors-hero-bg"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="sponsors-hero-overlay"></div>

        <div className="sponsors-hero-content">
          <div className="hero-text-wrap">
            <h1 className="hero-title">Sponsors</h1>
            <p className="hero-location">
              Current and Past Sponsors of Ursa Major 9180 Robotics
            </p>
          </div>
        </div>
      </section>

      <div className="sponsors-main">
        <div className="sponsors-grid">

          <aside className="sponsors-sidebar">
            <nav className="sponsors-nav">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`sponsors-nav-link ${activeYear === year ? "active" : ""}`}
                >
                  {year} SPONSORS
                </button>
              ))}
            </nav>
          </aside>

          <main className="sponsors-content">
            <p className="sponsors-description">
              Sponsorships and donations are important to the success of our 
              robotics team - they help us cover costs for competition fees, equipment, travel expenses, and more. 
              We are incredibly grateful for the support we receive from sponsorships! 
              If you or your organization is interested in sponsoring our team, please reach out to us by sending an email to 
              ghs.ursa.major@gmail.com or by submitting a form through the Sponsor Us section. 
            </p>
            
            <a href="#download" className="sponsors-download-btn">
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Sponsorship Packet
            </a>

            <div className="sponsors-organizations">
              <h2 className="sponsors-section-title">
                {activeYear} SPONSORING ORGANIZATIONS
              </h2>

              <div className="sponsors-logos-grid">
                {sponsorPages[activeYear].map((sponsor, index) => (
                  <div className="sponsor-item" key={index}>
                    <a
                      href={sponsor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sponsor-logo-wrapper"
                    >
                      <img
                        src={sponsor.logo}
                        alt={`Sponsor ${index + 1}`}
                        className="sponsor-logo"
                      />
                    </a>
                    {sponsor.description && (
                      <p className="sponsor-description-side">{sponsor.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}
