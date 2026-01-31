import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium flex items-center">
                        &copy; {new Date().getFullYear()} Mohit Tiwari. All rights reserved.
                        <span className="mx-2 hidden sm:inline">|</span>
                        <span className="hidden sm:inline">Built with React & Tailwind</span>
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/mohittiwari34" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors text-xl"><FaGithub /></a>
                    <a href="https://linkedin.com/in/mohit-tiwari-7707602a2" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors text-xl"><FaLinkedin /></a>
                    {/* <a href="#" className="text-slate-400 hover:text-white transition-colors text-xl"><FaTwitter /></a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
