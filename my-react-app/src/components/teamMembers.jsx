import React from "react";
import { motion } from "framer-motion";
import "./TeamMembers.css"; 
import "../components/Sponsors.css"; 
import pietroauraimg from "../images/pietroaura.png";
import goodpic from "../images/sparebg.jpg";
import rohaanphoto from "../images/rohaanphoto.jpg";
import aikhemaura from "../images/aikhemaura.png";
import ravenmogging from "../images/ravenmogging.png";
import confused1vcx from "../images/confusedninaimage1.jpg";
import stacyondaleft from "../images/stacyondaleft.jpg";
import amrin from "../images/amrin.jpg";
import majesticahhsunlight from "../images/majesticahhsunlight.jpg";
import kevin from "../images/kevin.png";
import twesha from "../images/twesha.png";
import teamdriver from "../images/teamdriver.jpg";
import tyler from "../images/tyler.png";
import noimagegiven from "../images/noimaginegiven.jpg";

const teamData = [
  {
    id: 1,
    name: "Pietro Faria",
    role: "Team Captain",
    description: "Is a \"professional chaos-managing pie\" who does a bit of everything. Has been a member since the Charged Up (2023) season and has consistently been the most imvolved person on the team.",
    image: pietroauraimg,
  },
  {
    id: 2,
    name: "Kevin Shao",
    role: "Build/Electrical Team Lead",
    description: "Did not provide a description.",
    image: kevin,
  },
  {
    id: 3,
    name: "Gurjaap Kahlon",
    role: "Design Team Lead",
    description: "Did not provide a description nor an image.",
    image: noimagegiven,
  },
  {
    id: 4,
    name: "Hexuan (Nina) Liu",
    role: "Admin (Website)",
    description:
      "Is the sole creator of this website, which was made using React.js (a javaScript framework) from scratch. Was briefly a member during Crescendo (2024).",
    image: confused1vcx,
  },
  {
    id: 5,
    name: "Aikhem Rai",
    role: "Business Team Lead/Admin (Outreach)",
    description: "Co-leads the admin team, has gained $1000+ in sponsorships for the team, has been a member since the Crescendo (2024) season.",
    image: aikhemaura,
  },
    {
    id: 6,
    name: "Rohaan Khan",
    role: "Team Photographer and Editor",
    description: "Took all the professional photos featured on this website, serves as the editor for team videos, and has been a member since the Crescendo (2024) season.",
    image: rohaanphoto,
  },
  {
    id: 7,
    name: "Twesha Parmar",
    role: "Programming (Robot) Team Lead",
    description: "Codes the robot, plans outreach, and manages business (sponsorships). Has been a member since the Charged Up (2023) season.",
    image: twesha,
  },
  {
    id: 8,
    name: "Tyler Chen",
    role: "Programming (Robot) Team Lead",
    description: "Writes and improves code for the robot and assists younger programmers. Has been a member since the Reefscape (2025) season.",
    image: tyler,
  },
  {
    id: 9,
    name: "Anhad Ghai",
    role: "Significant Programming (Robot) Contributor",
    description: "Did not provide a description nor an image.",
    image: noimagegiven,
  },
  {
    id: 10,
    name: "Raven Mui",
    role: "Design Team Lead Apprentice",
    description: "9180's design lead apprentice who also does a lot on the admin side of things; has taken on projects such as organizing and creating products for our school's winter market (the Polar Pop-up) as well as having organized our club fair.",
    image: ravenmogging,
  },
  {
    id: 11,
    name: "Nicole Yuan",
    role: "Significant Build Team Contributor",
    description: "\"A retired human player,\" who mainly works on wood prototyping for both preseason and on season robots. Likes buying late meeting food for the team during build season. Does some work on admin when possible. Has been on the team since Crescendo (2024).",
    image: majesticahhsunlight,
  },
  {
    id: 12,
    name: "Ejae Kim",
    role: "Significant Build Team Contributor",
    description: "Does design, build, and electrical work on major robot components to ensure that everything is reliable. Was part of the pit crew during the competition (handled quick repairs/adjustments) and helped run summer camp and Saturday robotics workshops.",
    image: noimagegiven,
  },
  {
    id: 13,
    name: "Amrin Wylie",
    role: "Significant Build Team Contributor",
    description: "Handled the cutting of aluminum parts and was heavily involved with the general construction and maintenance of the robot during 2025. Has been on the team since Reefscape (2025) and \"also rides a motorcycle :)\"",
    image: amrin,
  },
  {
    id: 14,
    name: "Che (Tracy) Wang",
    role: "Significant Design Contributor",
    description: "Designed the bear consellation (used in the About Us page and on the t-shirts), designed the Lego Workshops page of this website, and made the field elements for Reefscape. Was generally involved (consulted regarding) the website's design and functionality.",
    image: stacyondaleft,
  },
  {
    id: 15,
    name: "Sarah Holliday",
    role: "Team Driver",
    description: "Works with the programmers to configure controls and ensure the robot is comfortable to operate – \"My main job is to perform well in competitions, so I practice maneuvering the robot and I drive it around when it’s in the final stages of completion to prepare.”",
    image: teamdriver,
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
