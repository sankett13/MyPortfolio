import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LBM from "../assets/projects/LBM2.svg";
import CrimeRT from "../assets/projects/CrimeRandT.svg";
import JavaChat from "../assets/projects/JavaChat.svg";
import ReactMap from "../assets/projects/ReactMap.svg";
import Travel from "../assets/projects/Travel.svg";
import ChatE from "../assets/projects/ChatExpress.svg";

const projects = [
  {
    title: "Odoo-2024-Finals-Library-Management-System",
    description:
      "Library Management System using MERN and Tailwind css with Goggle OAuth , User Protected Routes , Jwt tokens, Admin functionality and many more features",
    githubLink:
      "https://github.com/sankett13/Odoo-2024-Finals-Library-Management-System",
    image: LBM,
  },
  {
    title: "Real Time Crime Reporting and Tracking",
    description:
      "Real Time Crime Reporting and Tracking Web App using MERN (Mongo db, Express, React, Node Js). With 3 user access Citizen, Law Enforcement and Admin. Google OAuth Integration for Signup and Login . The App detects the current location of the user while reporting crimes.",
    githubLink:
      "https://github.com/sankett13/Real-Time-Crime-Reporting-and-Tracking",
    image: CrimeRT,
  },
  {
    title: "ChatApp using Java",
    description:
      "A real-time chat application using Java multi-threading that enables multiple users to connect simultaneously to the same server through socket programming. This system will handle multiple client connections efficiently, ensuring seamless and concurrent communication between users in real time, making it robust and scalable.",
    githubLink: "https://github.com/sankett13/Chat-App-Using-Java",
    image: JavaChat,
  },
  {
    title: "React Map App Using React-Leaflet",
    description:
      "Web application using react leaflets that detects the current location of logged in user and also Provide the location of the marked or clicked pin on the map .Database used is mongo db for storing information about the logged in user..",
    githubLink: "https://github.com/sankett13/ReactMapApp",
    image: ReactMap,
  },
  {
    title: "Travel App ( Restful APIs CRUD app )",
    description:
      "A travel or listing web application using Express.js, Node.js, and MongoDB, featuring full CRUD operations. Users can search for listings, create new ones, edit existing listings, and delete entries. This application provides a dynamic and interactive interface for managing and exploring travel or listing data efficiently.",
    githubLink: "https://github.com/sankett13/Travel-App-Clone-RESTful-APIs",
    image: Travel,
  },
  {
    title: "Chat Application",
    description: "Chat Application using Express and Socket.io.",
    githubLink: "https://github.com/sankett13/ChatApp-Socket.io",
    image: ChatE,
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Increase rotation values for a more pronounced tilt
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.6, 1, 1, 0.6]
  );
  const rotation = useTransform(scrollYProgress, [0, 1], [5, -5]); // Adjust tilt

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale, opacity, rotateZ: rotation }}
      className="bg-gray-800 rounded-lg shadow-md p-6 mb-12 w-full transform-gpu"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full sm:w-60 h-48 object-cover rounded-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-200 mb-4">{project.description}</p>
          <div className="mt-auto">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white hover:border hover:box-shadow-xl inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View on GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="min-h-screen bg-black bg-opacity-50 flex justify-center py-20">
      <div className="w-full max-w-4xl px-4 flex flex-col items-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
