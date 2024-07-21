import React from "react";
import Technical from "../assets/Technical.png";
import Professional from "../assets/Professional.png";
import Innovative from "../assets/Innovative.png";
import canva from "../assets/Icons/Canva.svg";
import cpp from "../assets/Icons/CPP.svg";
import css from "../assets/Icons/CSS.svg";
import express from "../assets/Icons/ExpressL.svg";
import figma from "../assets/Icons/Figma.svg";
import html from "../assets/Icons/Html.svg";
import java from "../assets/Icons/Java.svg";
import js from "../assets/Icons/JavaScript.svg";
import mongodb from "../assets/Icons/MongoDb.svg";
import mysql from "../assets/Icons/MySql.svg";
import nodejs from "../assets/Icons/Nodejs.svg";
import react from "../assets/Icons/ReactL.svg";
import tailwind from "../assets/Icons/TailwindCss.svg";
import ai from "../assets/Icons/AI.svg";

const AboutMe = () => {
  const cards = [
    {
      title: "Technical",
      image: Technical,
      alt: "Technical skills",
      description:
        "Proficient in various programming languages and frameworks, a passionate developer with experience in both web and Java projects. As a proficient MERN stack developer, I specialize in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. My passion lies in backend development, where I continuously seek to expand my knowledge and skills.",
    },
    {
      title: "Professional",
      image: Professional,
      alt: "Professional experience",
      description:
        "I am a third-year student with a passion for development and photography. My journey in the tech world is driven by curiosity and a desire to create innovative solutions. Alongside my technical pursuits, I enjoy capturing the world through my lens, blending creativity with technology. I possess good communication skills in English, enabling me to effectively collaborate with peers and professionals.",
    },
    {
      title: "Innovative",
      image: Innovative,
      alt: "Innovative approach",
      description:
        "I tackle every challenge with a blend of creativity and forward-thinking. This approach allows me to craft innovative solutions that address complex problems effectively. Let’s collaborate to bring your vision to life with creativity and ingenuity.",
    },
  ];

  const smallImages = [
    { src: js, alt: "JavaScript" },
    { src: nodejs, alt: "Node.js" },
    { src: express, alt: "Express" },
    { src: mongodb, alt: "MongoDB" },
    { src: react, alt: "MySQL" },
    { src: java, alt: "Java" },
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: cpp, alt: "C++" },
    { src: figma, alt: "Figma" },
    { src: ai, alt: "Adobe Illustrator" },
    { src: canva, alt: "Canva" },
    { src: tailwind, alt: "Tailwind CSS" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          About Me
        </h1>
        <p className="mt-3 text-xl text-gray-200 sm:mt-4">
          Hi, I’m Shubham Patel...
        </p>
      </div>

      <div className="mt-10 flex flex-wrap -mx-4 mb-40">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col h-full transition-transform duration-300 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl hover:shadow-white/60">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-4 flex-1">
                <h2 className="text-lg font-medium text-white">{card.title}</h2>
                <p className="mt-2 text-base text-gray-200">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 justify-items-center">
          {smallImages.slice(0, 9).map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 justify-items-center">
          {smallImages.slice(9).map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
