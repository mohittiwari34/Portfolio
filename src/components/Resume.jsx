import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
    return (
        <section className="h-screen w-full bg-slate-50 dark:bg-slate-900 pt-16 relative overflow-hidden group">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
            >
                <iframe
                    src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    title="Resume PDF"
                    className="w-full h-full border-none"
                />

                <a
                    href="/resume.pdf"
                    download="Mohit_Kumar_Resume.pdf"
                    className="absolute top-20 right-8 bg-primary hover:bg-violet-700 text-white px-6 py-3 rounded-full font-bold shadow-2xl transition-all duration-300 flex items-center gap-2 transform translate-y-0 opacity-100 z-50 hover:scale-105"
                >
                    <FaDownload /> Download CV
                </a>
            </motion.div>
        </section>
    );
};

export default Resume;
