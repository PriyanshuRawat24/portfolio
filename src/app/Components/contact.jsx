"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Contact() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1.2, type: "spring", stiffness: 200 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#f5e7c1",
      transition: { duration: 0.2 },
    },
  }


  const socialLinks = [
    { name: "GitHub", icon: <FaGithub className="w-8 h-8" />, url: "https://github.com/PriyanshuRawat24" },
    { name: "LinkedIn", icon: <FaLinkedin className="w-8 h-8" />, url: "https://www.linkedin.com/in/priyanshu-rawat-07463b232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Twitter", icon: <FaTwitter className="w-8 h-8" />, url: "https://x.com/Priyans58452897" },
  ]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <motion.div
        className="flex flex-col items-center max-w-4xl w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 tracking-wider text-center"
          variants={titleVariants}
        >
          Visit My Profiles !
        </motion.h1>
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16 w-full max-w-2xl mx-auto px-4"
          variants={containerVariants}
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1e1e1e] rounded-full p-4 flex items-center justify-center w-16 h-16 hover:shadow-lg transition-all hover:bg-gray-100"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={buttonVariants} 
          whileHover="hover"
          className="flex justify-center"
        >
          <Link
            href="https://www.linkedin.com/in/priyanshu-rawat-07463b232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="bg-[#f8e9b5] text-[#1e1e1e] px-8 py-4 rounded-md font-medium flex items-center gap-2 tracking-wide hover:shadow-lg transition-all"
          >
            HIRE PRIYANSHU <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}