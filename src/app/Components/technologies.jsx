"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    category: "Frontend Development",
    skills: [
      { name: "JavaScript", icon: "/frontskill1.png" },
      { name: "React", icon: "/frontskill2.webp" },
      { name: "Redux", icon: "/frontskill3.webp" },
      { name: "Tailwind", icon: "/frontskill4.png" },
      { name: "HTML5", icon: "/frontskill5.webp" },
      { name: "CSS3", icon: "/frontskill6.png" },
      { name: "Bootstrap", icon: "/frontskill7.png" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Next.js", icon: "/backskill2.webp" },
      { name: "Node.js", icon: "/backskill1.png" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: "/database1.png" },
    ],
  },
  {
    category: "Others Skills",
    skills: [
      { name: "github", icon: "/other1.png" },
      { name: "Javascript", icon: "/frontskill1.png" },
    ],
  },
];

export default function Technologies() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <motion.h2
        className="text-center text-7xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technologies
      </motion.h2>

      <motion.p
        className="text-center text-gray-200/30 text-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        My Skills
      </motion.p>

      <div className="max-w-5xl mx-auto space-y-10">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{tech.category} :</h3>
            <div className="flex flex-wrap gap-4">
              {tech.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-xl hover:scale-100 transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.2 }}
                >
                  <Image src={skill.icon}  alt={skill.name} width={100} height={100} className="w-20 h-20 rounded-2xl" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
