import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "../../../public/divyansh.png";
import img2 from "../../../public/sushant.png";
import img3 from "../../../public/harshit.png";
import img4 from "/aryan.png";

const teamMembers = [
  {
    name: "Divyansh Sharma",
    github: "https://github.com/divyansharma001",
    img: img1,
  },
  {
    name: "Sushant Priyadarshi",
    github: "https://github.com/Shushant-Priyadarshi",
    img: img2,
  },
  {
    name: "Harshit Rawat",
    github: "https://github.com/itsharshitrwt",
    img: img3,
  },
  {
    name: "Aryan Sharma",
    github: "https://github.com/aaryan-sharmaa",
    img: img4,
  },
];

const About = () => {
  const [shuffledTeam, setShuffledTeam] = useState([]);

  useEffect(() => {
    const shuffled = [...teamMembers].sort(() => Math.random() - 0.5);
    setShuffledTeam(shuffled);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 4, ease: [0.2, 1, 0.2, 1] }}
        style={{
          width: "100%",
          backgroundColor: "#E0E6F9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="max-w-screen-xl px-4 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-4xl font-bold mb-6"
          >
            About Us
          </motion.h2>
          <p className="text-lg mb-8">
            PranaPulse is a groundbreaking AI-driven platform revolutionizing
            the way individuals approach health and wellness through the
            practice of yoga. At its core is Prana, a sophisticated AI companion
            capable of providing comprehensive guidance on all aspects of yoga
            and health. Prana is your virtual yoga guru, offering personalized
            advice, answering your questions, and tailoring yoga routines to
            your specific needs and goals. Beyond expert knowledge, PranaPulse
            offers an advanced posture analysis tool that leverages AI to
            deliver precise feedback, ensuring correct alignment and maximizing
            the benefits of every yoga pose.
          </p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-4xl font-bold mb-4"
          >
            Team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shuffledTeam.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.img}
                  alt={`Team Member ${index + 1}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-medium">{member.name}</h4>
                <a href={member.github}>Github</a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
