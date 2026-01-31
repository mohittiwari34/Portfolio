import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si';

const skills = [
    { name: 'Python', icon: <FaPython />, color: 'text-yellow-400' },
    { name: 'C/C++', icon: <span className="font-bold text-xl">C++</span>, color: 'text-blue-500' },
    { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
    { name: 'PHP', icon: <FaPhp />, color: 'text-purple-500' },
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
    { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
    { name: 'Express.js', icon: <FaNodeJs />, color: 'text-gray-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-300' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400' },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">
                        My <span className="text-primary">Skills</span>
                    </h2>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col items-center group cursor-default"
                            >
                                <div className={`text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary dark:group-hover:text-white">{skill.name}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
