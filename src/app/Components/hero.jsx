"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
        delay: 100,
        initialInView: true,
        unmountOnExit: true,
        rootMargin: "-100px",
        root: null,
        fallbackInView: true,
        skip: false,
        onChange: (inView) => {
            if (inView) {
                controls.start("visible");
            } else {
                controls.start("hidden");
            }
        }
    });

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.95,
            transition: { duration: 0.1 }
        }
    };

    const iconVariants = {
        hover: {
            y: -5,
            transition: { duration: 0.2 }
        }
    };

    const typingContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                repeat: Infinity,
                repeatDelay: 3
            }
        }
    };

    const typingVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    const text1 = "Hello,".split("");
    const text2 = "I'm Priyanshu Rawat".split("  ");

    const socialLinks = [
        { Icon: FaGithub, href: 'https://github.com/PriyanshuRawat24', label: 'GitHub' },
        { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/priyanshu-rawat-07463b232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
        { Icon: FaTwitter, href: 'https://x.com/Priyans58452897', label: 'Twitter' },
    ];

    return (
        <div id='home' className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-16 py-16 md:py-24">
            <main className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 lg:mt-[100px]">
                <motion.div
                    ref={ref}
                    className="w-full md:w-1/2 space-y-6"
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div
                        variants={typingContainerVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-light flex flex-wrap"
                    >
                        {text1.map((char, index) => (
                            <motion.span key={index} variants={typingVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={typingContainerVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-light flex flex-wrap"
                    >
                        {text2.map((char, index) => (
                            <motion.span key={index} variants={typingVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl font-light text-gray-300"
                        variants={textVariants}
                    >
                        Passionate about crafting engaging and user-friendly interfaces that deliver seamless experiences. Dedicated to leveraging innovative technologies to build impactful solutions that drive real change.
                        <br /><br />
                        Expertise in React | Focus on responsive design, performance optimization, and accessibility.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        variants={textVariants}
                    >
                        <motion.a
                            href="https://docs.google.com/document/d/17bu4D9v42oNJgWubG1_koqXMlpz9H-tWuN4FM1wrCrs/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-white hover:text-gray-900 transition-colors text-center"
                            whileHover="hover"
                            whileTap="tap"
                            variants={buttonVariants}
                        >
                            <HiDocumentText size={20} />
                            <span>RESUME</span>
                        </motion.a>
                        <motion.a
                            href="mailto:Rawatpriyanshu088@gmail.com"
                            className="bg-white text-gray-900 px-6 py-3 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors text-center"
                            whileHover="hover"
                            whileTap="tap"
                            variants={buttonVariants}
                        >
                            <span>HIRE ME</span>
                            <FaArrowUp size={20} className="rotate-45" />
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative">
                        <motion.div
                            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg"
                            whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
                        >
                            <Image
                                src="/portfolio.jpg"
                                alt="Priyanshu Rawat"
                                width={300}
                                height={300}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </motion.div>
                        <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col space-y-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-2xl hover:text-gray-300"
                                    whileHover="hover"
                                    variants={iconVariants}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + (index * 0.2) }}
                                    aria-label={social.label}
                                >
                                    <social.Icon />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </main>
            <div className="flex justify-center gap-8 mt-12 md:hidden">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.label}
                    >
                        <social.Icon />
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Hero;