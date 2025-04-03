"use client"

import React from 'react'
import { scrollToSection } from './scrollToSection'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 px-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-base md:text-xl lg:text-2xl text-white text-center">
          Made with <span className="animate-pulse">🤍</span> by{" "}
          <button 
            onClick={() => scrollToSection('home')}
            className="font-semibold hover:text-teal-400 transition-colors cursor-pointer"
          >
            Priyanshu
          </button>{" "}
          <span className="text-white">© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer;