import React from 'react';
import { motion } from 'framer-motion';
import GithubStats from './GithubStats';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="flex flex-col items-center justify-center">
                        {/* Content */}
                        <div className="w-full max-w-4xl">
                            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white text-center md:text-left">Full Stack Developer</h3>

                            <div className="space-y-6 text-lg font-medium text-slate-600 dark:text-slate-300">
                                <p>
                                    I am a passionate Full Stack Developer and a B.Tech CSE student at Lovely Professional University (2023-2027).
                                    My journey in tech involves mastering Data Structures & Algorithms, building scalable web applications, and exploring Cloud Computing.
                                </p>
                                <p>
                                    I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a strong foundation in Languages like C++, Python, and Java.
                                    I love solving complex problems, contributing to open-source, and continuously learning new technologies.
                                </p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-center w-32 hover:border-primary transition-colors shadow-sm dark:shadow-none">
                                        <h3 className="text-3xl font-extrabold text-secondary">300+</h3>
                                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">DSA Problems</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-center w-32 hover:border-primary transition-colors shadow-sm dark:shadow-none">
                                        <h3 className="text-3xl font-extrabold text-secondary">4+</h3>
                                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Projects Completed</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-center w-32 hover:border-primary transition-colors shadow-sm dark:shadow-none">
                                        <h3 className="text-3xl font-extrabold text-secondary">8.01</h3>
                                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">CGPA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GitHub Stats */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">GitHub Contributions</h3>
                        <GithubStats />
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
