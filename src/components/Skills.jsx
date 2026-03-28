import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si';

const skillCategories = [
    {
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces.",
        skills: [
            { name: 'React', icon: <FaReact />, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
            { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-300', bg: 'bg-cyan-300/10' },
            { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500', bg: 'bg-orange-500/10' },
            { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        ]
    },
    {
        title: "Backend & Database",
        description: "Server-side logic and database management.",
        skills: [
            { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', bg: 'bg-green-500/10' },
            { name: 'Express.js', icon: <FaNodeJs />, color: 'text-gray-500 dark:text-gray-400', bg: 'bg-gray-500/10' },
            { name: 'PHP', icon: <FaPhp />, color: 'text-purple-500', bg: 'bg-purple-500/10' },
            { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400', bg: 'bg-green-400/10' },
            { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
        ]
    },
    {
        title: "Languages & Tools",
        description: "Core programming languages and version control.",
        skills: [
            { name: 'Python', icon: <FaPython />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
            { name: 'C/C++', icon: <span className="font-bold text-xl">C++</span>, color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { name: 'Java', icon: <FaJava />, color: 'text-red-500', bg: 'bg-red-500/10' },
            { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600', bg: 'bg-orange-600/10' },
        ]
    }
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* Background blobs for premium glassmorphism effect */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:opacity-20 hidden md:block"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:opacity-20 hidden md:block"></div>
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:opacity-20 hidden md:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Expertise</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive overview of the technologies, languages, and tools I use to build robust and scalable applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl shadow-slate-200/20 dark:shadow-none hover:border-primary/50 dark:hover:border-primary/50 transition-colors duration-300 group"
                        >
                            <div className="mb-8 relative z-10">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{category.description}</p>
                            </div>

                            <motion.div 
                                className="grid grid-cols-2 gap-4 relative z-10"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 cursor-default"
                                    >
                                        <div className={`text-4xl mb-3 p-3 rounded-full ${skill.bg} ${skill.color} shadow-sm group-hover:scale-110 transition-transform`}>
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
