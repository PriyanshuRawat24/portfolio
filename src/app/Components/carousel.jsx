"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const carouselData = [
  {
    title: "To-Do List",
    description: "A To-Do List in JavaScript uses HTML, CSS, and JS. An input field and button add tasks, while event listeners handle interactions. Tasks are stored in an array, displayed via DOM manipulation, and saved with local storage to persist data. CSS adds styling and animations.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/Todo-List.png",
    projectUrl: "https://github.com/PriyanshuRawat24/Tode-List",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking app with detailed forecasts and interactive maps.",
    techStack: ["HTML", "OpenWeather API", "CSS", "Javascript"],
    imageUrl: "/weather.png",
    projectUrl: "https://github.com/PriyanshuRawat24/Weather-Dashboard",
  },
  {
    title: "Chat App",
    description: "Real-time messaging application with group chat and file sharing capabilities.",
    techStack: ["Html", "CSS", "Javascript"],
    imageUrl: "/Chat-app.png",
    projectUrl: "https://github.com/PriyanshuRawat24/Chat-App",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online shopping platform with cart management and payment integration.",
    techStack: ["Next.js", "Stripe", "MongoDB"],
    imageUrl: "/E-Commerce.png",
    projectUrl: "https://github.com/PriyanshuRawat24/E-commerce",
  },
];

export default function ProjectCarousel() {
  return (
    <div className="py-10 px-4 md:px-6 lg:px-8 bg-gray-900">
      <Carousel className="w-full max-w-5xl mx-auto p-5" 
        plugins={[
          Autoplay({
            delay: 2000,
            loop: Infinity,
          }),
        ]}>
        <CarouselContent>
          {carouselData.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-gray-900 text-white h-full">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={project.projectUrl} className="block">
                      <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                        <motion.img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-800 px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <motion.div 
                        className="flex items-center text-teal-400 group"
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-2">View Project</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}