import React from 'react';
import { motion } from 'framer-motion';

import nptelImage from '../assets/project_images/nptel_cert.jpg';
import lpuImage from '../assets/project_images/lpu_dsa_cert.jpg';
import dockerImage from '../assets/project_images/docker_cert.jpg';
import fccImage from '../assets/project_images/fcc_rwd_cert.jpg';
import lpuHackathonImage from '../assets/project_images/lpu_hackathon_cert.jpg';

const MyCertificates = () => {
    const certificates = [
        {
            title: "NPTEL Cloud Computing",
            description: "Completed an Elite 12-week online certification course in Cloud Computing funded by the MoE, Govt. of India, organized by IIT Kharagpur.",
            tags: ["Cloud Computing", "IIT Kharagpur", "NPTEL"],
            image: nptelImage,
            issuer: "IIT Kharagpur"
        },
        {
            title: "Data Structures and Algorithms",
            description: "Certificate of Merit for successfully completing the skill development course on Data Structures and Algorithms with Grade 'A'.",
            tags: ["Data Structures", "Algorithms", "Problem Solving"],
            image: lpuImage,
            issuer: "Lovely Professional University"
        },
        {
            title: "Docker Mastery",
            description: "Completed comprehensive Docker curriculum including Kubernetes and Swarm, instructed by Docker Captain Bret Fisher.",
            tags: ["Docker", "Kubernetes", "DevOps"],
            image: dockerImage,
            issuer: "Udemy"
        },
        {
            title: "Responsive Web Design",
            description: "Developer Certification representing approximately 300 hours of coursework in modern responsive web development.",
            tags: ["HTML", "CSS", "Responsive Design"],
            image: fccImage,
            issuer: "freeCodeCamp"
        },
        {
            title: "Code-A-Haunt Hackathon",
            description: "Certificate of Participation for showcasing exceptional coding and problem-solving skills in the 24-hour hackathon.",
            tags: ["Hackathon", "Problem Solving", "CodingBlocks"],
            image: lpuHackathonImage,
            issuer: "LPU & CodingBlocks"
        }
    ];

    return (
        <section id="certificates" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">
                        My <span className="text-primary">Certificates</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-primary/20 flex flex-col"
                            >
                                <div className="relative overflow-hidden aspect-[1.4] bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 z-10 pointer-events-none" />
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-contain p-2 transform group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">{cert.title}</h3>
                                    <p className="text-primary mb-3 text-sm font-semibold">{cert.issuer}</p>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm font-medium flex-1">{cert.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {cert.tags.map((tag) => (
                                            <span key={tag} className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold px-2 py-1 rounded-full border border-slate-200 dark:border-slate-600">
                                                {tag}
                                            </span>
                                        ))}
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

export default MyCertificates;
