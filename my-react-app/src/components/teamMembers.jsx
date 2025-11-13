import React from "react";
import { motion } from "framer-motion";
import "./TeamMembers.css"; 
import "../components/Sponsors.css"; 
import pietroauraimg from "../images/pietroaura.png";
import goodpic from "../images/sparebg.jpg";
import rohaanphoto from "../images/rohaanphoto.jpg";
import aikhemaura from "../images/aikhemaura.png";
import ravenmogging from "../images/ravenmogging.png";
import confused1vcx from "../images/confusedninaimage.jpg";
import stacyondaleft from "../images/stacyondaleft.jpg";

const teamData = [
  {
    id: 1,
    name: "Pietro Faria",
    role: "Team Captain",
    description: "Idk I'll ask later (placeholder).",
    image: pietroauraimg,
  },
  {
    id: 2,
    name: "Kevin Shao",
    role: "Build/Electrical Team Lead",
    description: "Idk I'll ask later (placeholder).",
    image: {},
  },
  {
    id: 3,
    name: "Hexuan (Nina) Liu",
    role: "Admin (Website)",
    description:
      "Is the sole creator of this website, which was made using React.js (a javaScript framework) from scratch. Was briefly a member during the Crescendo (2023) season before making the official website for Ursa Major 9180 in 2025.",
    image: confused1vcx,
  },
  {
    id: 4,
    name: "Gurjaap Kahlon",
    role: "Design Team Lead",
    description: "Idk I'll ask later (placeholder).",
    image: {},
  },
  {
    id: 5,
    name: "Aikhem Rai",
    role: "Business Team Lead/Admin (Outreach)",
    description: "Idk I'll ask later (placeholder).",
    image: aikhemaura,
  },
    {
    id: 7,
    name: "Rohaan Khan",
    role: "Team Photographer and Editor",
    description: "Took all the professional photos featured on this website, serves as the editor for team videos, and has been a member since the Crescendo (2023) season.",
    image: rohaanphoto,
  },
  {
    id: 8,
    name: "Twesha Parmar",
    role: "Programming (Robot) Team Lead",
    description: "Idk I'll ask later (placeholder).",
    image: {},
  },
  {
    id: 9,
    name: "Tyler Chen",
    role: "Programming (Robot) Team Lead",
    description: "Idk I'll ask later (placeholder).",
    image: {},
  },
  {
    id: 10,
    name: "Raven Mui",
    role: "Design Team Lead Apprentice",
    description: "9180's design lead apprentice who also does a lot on the admin side of things; has taken on projects such as organizing and creating products for our school's winter market (the Polar Pop-up) as well as organized our club fair booth",
    image: ravenmogging,
  },
  {
    id: 11,
    name: "[There's another person here]",
    role: "Significant Build Team Contributor",
    description: "Idk I'll ask later (placeholder).",
    image: {},
  },
  {
    id: 12,
    name: "[There's another person here]",
    role: "Significant Build Team Contributor",
    description: "Idk I'll ask later (placeholder).",
    image: {},
  },
  {
    id: 6,
    name: "Che (Tracy) Wang",
    role: "Significant Design Contributor",
    description: "Designed the bear consellation (used in the About Us page and on the t-shirts), designed the Lego Workshops page of this website, and made the field elements for Reefscape. Was generally involved (consulted regarding) the website's design and functionality.",
    image: stacyondaleft,
  },

];

const TeamCard = ({ member, index }) => (
  <motion.div
    className="team-card"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="team-card-image">
      <img src={member.image} alt={member.name} />
    </div>
    <div className="p-6 text-center">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <p className="description">{member.description}</p>
    </div>
  </motion.div>
);

const TeamMembers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  return (
    <div className="team-page">

      <section className="sponsors-hero">
        <div
          className="sponsors-hero-bg"
          style={{ backgroundImage: `url(${goodpic})` }}
        ></div>
        <div className="sponsors-hero-overlay"></div>

        <div className="sponsors-hero-content">
          <div className="hero-text-wrap">
            <h1 className="hero-title">Team Leads</h1>
            <p className="hero-location">
              The leaders and/or individuals who made significant contributions to Ursa Major 9180. 
            </p>
          </div>
        </div>
      </section>

      {/* Team cards */}
      <section className="container">
        <motion.div
          className="grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamData.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default TeamMembers;
