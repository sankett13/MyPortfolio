import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black bg-opacity-80 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl pl-3.5">
            Shubham Patel
          </div>
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <svg
              className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-transform duration-300 ease-out transform ${
            isOpen ? "scale-y-100 opacity-90 h-auto" : "scale-y-0 opacity-0 h-0"
          } bg-black fixed inset-0`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col justify-center items-center space-y-4 mt-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="block py-2 px-4 text-white no-underline group transition-all duration-500 ease-in-out"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-transparent group-hover:bg-white"></span>
              </Link>
            </li>
            <li>
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="block py-2 px-4 text-white no-underline group transition-all duration-500 ease-in-out"
              >
                About Me
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-transparent group-hover:bg-white"></span>
              </Link>
            </li>
            <li>
              <Link
                to="skills-projects"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="block py-2 px-4 text-white no-underline group transition-all duration-500 ease-in-out"
              >
                Skills & Projects
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-transparent group-hover:bg-white"></span>
              </Link>
            </li>
            <li>
              <a
                href="mailto:your-email@example.com"
                onClick={closeMenu}
                className="block py-2 px-4 text-white no-underline group transition-all duration-500 ease-in-out"
              >
                Email
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-transparent group-hover:bg-white"></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block py-2 px-4 text-white no-underline group transition-all duration-500 ease-in-out"
              >
                LinkedIn
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-transparent group-hover:bg-white"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between mt-4 lg:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-block py-2 px-4 text-white no-underline group transition-all duration-500 ease-in-out"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-transparent group-hover:bg-white"></span>
              </Link>
            </li>
            <li>
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-block py-2 px-4 text-white no-underline group transition-all duration-500 ease-in-out"
              >
                About Me
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-transparent group-hover:bg-white"></span>
              </Link>
            </li>
            <li>
              <Link
                to="skills-projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-block py-2 px-4 text-white no-underline group transition-all duration-500 ease-in-out"
              >
                Skills & Projects
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-transparent group-hover:bg-white"></span>
              </Link>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <a
                href="mailto:sanket13052004@gmail.com"
                className="inline-block py-2 px-4 text-white no-underline group transition-all duration-500 ease-in-out"
              >
                Email
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-transparent group-hover:bg-white"></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shubham-patel-506a79270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 text-white no-underline group transition-all duration-500 ease-in-out"
              >
                LinkedIn
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-transparent group-hover:bg-white"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
