"use client";
import { motion } from "framer-motion";
import React from "react";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "DigiLinkers",
    description: "Worked on frontend development using HTML, CSS, JavaScript, and Bootstrap at Digilinkers.",
    startDate: "Jan 2024",
    endDate: "Mar 2024",
  },
  {
    title: "Frontend Developer Intern",
    company: "Desire Div",
    description: "Currently working at Desire Div as a Frontend Developer, utilizing HTML, Tailwind CSS, JavaScript, Next.js, Redux, and React.js.",
    startDate: "Apr 2024",
    endDate: "Present",
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full relative mt-32 p-5">
        <h1 className="text-7xl font-bold mb-4 text-center">Work Experience</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-200/30">What I{'\''}ve done so far</h2>

        <div className="relative mt-20 mb-20">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-8 flex ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-2/3">
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-400 mb-2">{experience.company}</p>
                <p>{experience.description}</p>
                <p className="text-sm text-gray-400 mt-2">{experience.startDate} - {experience.endDate}</p>
              </div>
              <div className="w-1/3 flex flex-col items-center relative">
                <div className="bg-white text-gray-900 rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg relative">
                  {index + 1}
                </div>
                <div className="w-1 bg-white flex-1"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
