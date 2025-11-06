import React, { useEffect } from "react";
import "./additionalResources.css";
import bgImage from "../images/brandimg2.jpg";
import Footer from "./Footer";

import resource1 from "../images/brandimg1.png";
import resource2 from "../images/brandimg2.jpg";
import resource3 from "../images/brandimg3.png";
import resource4 from "../images/brandimg4.png";
import resource5 from "../images/brandimg3.png";
import resource6 from "../images/bearconsellation.jpg";

export default function AdditionalResources() {
  const resources = [
    { id: 1, title: "Presentation Template", subtitle: "Team-branded slide deck", type: "PNG", image: resource1 },
    { id: 2, title: "Event Banner", subtitle: "High-res printable banner", type: "JPG", image: resource2 },
    { id: 3, title: "Promo Poster", subtitle: "For print or digital", type: "PNG", image: resource3 },
    { id: 4, title: "Team Photo", subtitle: "Official team portrait", type: "PNG", image: resource4 },
    { id: 5, title: "Social Kit", subtitle: "Social media post templates", type: "PNG", image: resource5 },
    { id: 6, title: "a", subtitle: "Social media post templates", type: "JPG", image: resource6 },
  ];

  useEffect(() => {
    document.body.classList.add("hide-footer");
    return () => document.body.classList.remove("hide-footer");
  }, []);

  const handleDownload = async (item) => {
    try {
      const res = await fetch(item.image);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const ext = item.type ? item.type.toLowerCase() : "png";
      a.download = `${item.title.replace(/\s+/g, "_")}.${ext}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      // fallback: open in new tab
      window.open(item.image, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="resources-wrapper"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="resources-container">
        <h1 className="page-title">Additional Resources</h1>
        <p className="page-description">
          Download official media kits, promotional materials, and design
          resources for Ursa Major 9180. Use these assets to represent our team
          consistently across all platforms.
        </p>

        <h2 className="section-title">Download Resources</h2>
        <p className="section-description">
          High-quality resources ready for any application or medium.
        </p>

        <div className="card-grid">
          {resources.map((item) => (
            <div key={item.id} className="resource-card">
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-subtitle">{item.subtitle}</p>
                <p className="card-type">{item.type}</p>
                <button
                  type="button"
                  onClick={() => handleDownload(item)}
                  className="download-btn"
                  aria-label={`Download ${item.title}`}
                >
                  Download
                </button>
              </div>
              
            </div>
            
          ))}
        </div>
        
      </div>
      
    </div>
    
  );
}
