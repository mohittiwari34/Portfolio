import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import chatappImage from '../assets/project_images/chatapp.png';
import leetcodeImage from '../assets/project_images/leetcode.png';
import weatherImage from '../assets/project_images/weather.png';
import vocalImage from '../assets/project_images/vocal.png';
import swiggyImage from '../assets/project_images/swiggy.png';

const Projects = () => {
    const projects = [
        {
            title: "LeetCode Clone",
            description: "A collaborative coding platform featuring code execution, problem-solving interfaces, and real-time compilation capabilities.",
            tags: ["React", "Express", "Monaco Editor", "Docker"],
            image: leetcodeImage,
            gLink: "https://github.com/mohittiwari34/LeetCode_Project",
            lLink: "https://leetcode-project-nine.vercel.app/"
        },
        {
            title: "Vocal - Language Learning Platform",
            description: "An interactive language learning application built to help users master new languages through vocal practice and exercises.",
            tags: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
            image: vocalImage,
            gLink: "https://github.com/mohittiwari34/LLP",
            lLink: "https://llp-7khm.vercel.app/"
        },
        {
            title: "Real-time Chat App",
            description: "A full-featured chat application with video calling capabilities, user authentication, and real-time messaging using Socket.io and ZegoCloud.",
            tags: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
            image: chatappImage,
            gLink: "https://github.com/mohittiwari34/chat-app",
            lLink: "https://chatapp-six-ashy.vercel.app/"
        },
        {
            title: "Swiggy Clone",
            description: "A responsive food ordering platform clone with restaurant listings, cart functionality, and Redux state management.",
            tags: ["React", "Redux", "Tailwind CSS", "API Integration"],
            image: swiggyImage,
            gLink: "https://github.com/mohittiwari34/SwiggyProject",
            lLink: "#"
        },
        {
            title: "Weather Forecast",
            description: "A dynamic weather application providing real-time forecasts, location-based tracking, and interactive weather maps using OpenWeatherMap API.",
            tags: ["React", "OpenWeatherMap API", "Geocoding", "Chart.js"],
            image: weatherImage,
            gLink: "https://github.com/mohittiwari34/WeatherProject1",
            lLink: "https://weather-project1-l2dm.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">
                        Featured <span className="text-primary">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-primary/20"
                            >
                                <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm font-medium line-clamp-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold px-2 py-1 rounded-full border border-slate-200 dark:border-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <Link
                                            to={project.lLink.startsWith('http') ? project.lLink : `/live-demo?project=${encodeURIComponent(project.title)}`}
                                            target={project.lLink.startsWith('http') ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-primary hover:bg-violet-700 text-white py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </Link>
                                        <a href={project.gLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
                                            <FaGithub /> GitHub
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
