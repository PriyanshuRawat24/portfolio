"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from './scrollToSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'PROJECTS', id: 'projects' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'SKILLS', id: 'technologies' },
    { name: 'CONTACT', id: 'contact' }
  ];

  const handleClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };
     
  return (
    <div className="bg-gray-900 text-white fixed w-full z-50">
      <nav className="mx-auto py-5 px-10 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-script"
        >
          <div>
            <button onClick={() => scrollToSection('home')} className='relative'>
              Priyanshu Rawat
            </button>
          </div>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <button 
                onClick={() => handleClick(item.id)} 
                className="hover:text-gray-300 transition-colors"
              >
                {item.name}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800"
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-4 py-3"
              >
                <button
                  onClick={() => handleClick(item.id)}
                  className="block w-full text-left"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;