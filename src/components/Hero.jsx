import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import ProfilePhoto from '../assets/profilephoto.jpeg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl text-primary font-bold mb-2">Hello, I'm</h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black dark:text-white">
                            Mohit Tiwari
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-slate-600 dark:text-slate-400 h-20 md:h-auto">
                            <TypeAnimation
                                sequence={[
                                    'Fullstack Developer',
                                    1000,
                                    'Web Designer',
                                    1000,
                                    'React Enthusiast',
                                    1000,
                                    'Problem Solver',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h2>
                        <p className="text-lg font-medium text-slate-700 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
                            I build exceptional digital experiences that are fast, accessible, and visually stunning.
                        </p>

                        <div className="flex space-x-4 justify-center md:justify-start mb-8">
                            <a href="#projects" className="bg-primary hover:bg-violet-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105">
                                View Work
                            </a>
                            <a href="#contact" className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full font-bold transition-all duration-300">
                                Contact Me
                            </a>
                        </div>

                        <div className="flex space-x-6 justify-center md:justify-start">
                            <a href="https://github.com/mohittiwari34" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors text-2xl"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/mohit-tiwari-7707602a2/" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors text-2xl"><FaLinkedin /></a>
                            <a href="https://x.com/Mohitti778814" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors text-2xl"><FaTwitter /></a>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image / Graphic */}
                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-64 h-64 md:w-96 md:h-96"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <img
                            src={ProfilePhoto}
                            alt="Profile"
                            className="relative w-full h-full object-cover object-[center_20%] rounded-full border-4 border-white dark:border-slate-800 shadow-2xl animate-float"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
