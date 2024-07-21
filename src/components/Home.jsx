import React, { useEffect } from "react";
import { FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Cursor from "./Cursor.jsx";
import AboutMe from "./AboutMe.jsx";
import Footer from "./Footer.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import Profile from "../assets/SanPro.jpg";

const HomePage = () => {
  useEffect(() => {
    // Scroll to top on component mount (page load/refresh)
    window.scrollTo(0, 0);

    // Prevent default scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Optional: Smooth scroll to top when the component updates
    const smoothScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Attach the smooth scroll function to the 'beforeunload' event
    window.addEventListener("beforeunload", smoothScrollToTop);

    // Cleanup function
    return () => {
      window.removeEventListener("beforeunload", smoothScrollToTop);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Animated Background Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-xl opacity-60"
              animate={{
                scale: [1, 2, 2, 1, 1],
                x: [0, 200, 0, 200, 0],
                y: [0, -200, 200, -200, 0],
                backgroundColor: [
                  "hsl(230, 80%, 50%)",
                  "hsl(280, 80%, 50%)",
                  "hsl(330, 80%, 50%)",
                  "hsl(180, 80%, 50%)",
                  "hsl(230, 80%, 50%)",
                ],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />
          {/* Main Content */}
          <main
            id="home"
            className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen mb-10 mt-6"
          >
            <div className="text-center">
              {/* Profile Image */}
              <motion.img
                src={Profile}
                alt="Profile"
                className="w-56 h-56 rounded-full mx-auto mb-6 object-cover"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-white bg-gradient-to-r from-blue-400 to-purple-600"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                whileHover={{ scale: 1.09, transition: { duration: 0.8 } }}
              >
                Shubham Patel
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-xl text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 w-full sm:w-[28em] md:w-[30em] lg:w-[32em]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              >
                A passionate developer dedicated to crafting innovative and
                elegant solutions. Let's build something amazing together!
              </motion.p>

              <motion.div
                className="flex space-x-4 items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 2 }}
              >
                {/* Github Button */}
                <a href="https://github.com/sankett13">
                  <motion.button
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    Github
                  </motion.button>
                </a>
                {/* Resume Button */}
                <a href="/ShubhamPatel_Resume.pdf" target="_blank">
                  <motion.button
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaFileAlt className="mr-2" />
                    Resume
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </main>
          <section id="about-me" className="mb-40">
            <AboutMe />
          </section>
          <section id="skills-projects">
            <ProjectsSection />
          </section>
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;
