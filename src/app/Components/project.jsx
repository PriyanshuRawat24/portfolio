"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { scrollToSection } from './scrollToSection';


const ProjectCard = ({ project, index, isActive, onMouseEnter, onMouseLeave }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-24 items-center`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      } : {}}
      whileHover={{ scale: 1.01 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="md:w-1/2 mb-8 md:mb-0 px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: isActive ? 1 : 0.9 }}
        >
          {project.title}
        </motion.h2>
        <p className="text-lg text-gray-400 mb-4">{project.tagline}</p>
        <p className="text-gray-300 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="px-4 py-1 bg-gray-800 text-sm rounded-full border border-gray-700"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(75, 85, 99, 0.8)"
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <ProjectLink url={project.url} />
      </div>
      <ProjectImage project={project} />
    </motion.div>
  );
};

const ProjectLink = ({ url }) => (
  <motion.div
    className="mt-6"
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 text-white hover:text-teal-300 transition-colors"
    >
      <span className="text-lg font-medium">View Project</span>
      <FaExternalLinkAlt className="w-4 h-4 ml-2" />
    </Link>
  </motion.div>
);

const ProjectImage = ({ project }) => (
  <div className="md:w-1/2 px-4">
    <motion.div
      className="rounded-xl overflow-hidden shadow-2xl"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={700}
        height={400}
        className="object-cover w-full h-full"
        priority={true}
      />
    </motion.div>
  </div>
);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "ADYASHAKTI",
      tagline: "ADYASHAKTI – Learn, Create, and Connect Seamlessly.",
      description: "ADYASHAKTI is an intuitive EdTech, fighting malnutrition, Mental Wellness platform built with Next.js, incorporating Framer Motion for smooth animations. The platform utilizes HTML, Tailwind CSS, and JavaScript to deliver a seamless, interactive learning experience. I worked on the front-end development, ensuring a dynamic UI for users to create, consume, and rate educational content. While the front end is complete, the backend development is still in progress to enhance functionality. This platform empowers instructors to showcase expertise and connect with learners worldwide, fostering a global community of educators and students.",
      technologies: ["ReactJS", "Nextjs", "Tailwind CSS", "Javascript", "GitHub"],
      image: "/adya.png",
      url: "https://adyashakti.org.in/"
    },
    {
      id: 2,
      title: "STEEL FORGE",
      tagline: "A Project Management Tool For Teams",
      description: "Steel Forge is a comprehensive project management solution tailored for machine-based industries, ensuring seamless team collaboration and efficient workflow management. Built with Next.js, React/Redux, Framer Motion, HTML, Tailwind CSS, and JavaScript, it offers a clean and intuitive interface for managing projects effectively.",
      technologies: ["ReactJS", "Nextjs", "Tailwind CSS", "Javascript", "GitHub"],
      image: "/machine.png",
      url: "https://steelforge.vercel.app/"
    },
    // {
    //   id: 3,
    //   title: "FITFUSION",
    //   tagline: "Fitness Tracking App With AI Coach",
    //   description: "FitFusion combines cutting-edge fitness tracking with personalized AI coaching. Users can track workouts, nutrition, and progress while receiving custom workout plans and real-time form correction. The app uses machine learning to adapt recommendations based on user performance and goals, creating a truly personalized fitness experience.",
    //   technologies: ["React Native", "TensorFlow", "Node.js", "MongoDB", "AWS"],
    //   image: "/fitfusion.jpg",
    //   url: "https://fitfusion.vercel.app"
    // },
    // {
    //   id: 4,
    //   title: "ECOMART",
    //   tagline: "Sustainable E-commerce Platform",
    //   description: "EcoMart is an e-commerce platform focused exclusively on sustainable and eco-friendly products. The platform features carbon footprint calculation for each product, transparent supply chain information, and a reward system for sustainable choices. The minimalist design and intuitive interface make sustainable shopping accessible and enjoyable.",
    //   technologies: ["Next.js", "Stripe", "Sanity.io", "Tailwind CSS", "Vercel"],
    //   image: "/ecomart.jpg",
    //   url: "https://ecomart.vercel.app"
    // }
  ];

  const variants = {
    header: {
      hidden: { opacity: 0, y: -20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      }
    },
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
      }
    }
  };

  return (
    <div id='Project' className="bg-gray-900 min-h-screen text-white pt-32 p-4 md:p-20 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 mb-12 text-center"
        initial="hidden"
        animate="visible"
        variants={variants.header}
      >
        <h1 className="text-7xl md:text-8xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-200/30 mt-9">My Work</p>
      </motion.div>

      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={variants.container}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isActive={activeProject === project.id}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;