import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === '/';

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', to: 'home', type: 'scroll', path: '/' },
        { name: 'About', to: 'about', type: 'scroll', path: '/' },
        { name: 'Skills', to: 'skills', type: 'scroll', path: '/' },
        { name: 'Projects', to: 'projects', type: 'scroll', path: '/' },
        { name: 'Resume', to: '/resume', type: 'route' },
        { name: 'Blog', to: '/blog', type: 'route' },
        { name: 'Contact', to: 'contact', type: 'scroll', path: '/' },
    ];

    const handleNavigation = (link) => {
        setIsOpen(false);
        if (link.type === 'scroll') {
            if (!isHomePage) {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(link.to);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border-b border-white/10 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <RouterLink to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                        Mohit<span className="text-slate-700 dark:text-white">.dev</span>
                    </RouterLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.type === 'scroll' ? (
                                <ScrollLink
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                                    onClick={() => handleNavigation(link)}
                                >
                                    {link.name}
                                </ScrollLink>
                            ) : (
                                <RouterLink
                                    key={link.name}
                                    to={link.to}
                                    className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                    {link.name}
                                </RouterLink>
                            )
                        ))}

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300 shadow-sm"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} className="text-slate-600" />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300"
                        >
                            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} className="text-slate-600" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 dark:text-slate-300 hover:text-white"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                link.type === 'scroll' ? (
                                    <ScrollLink
                                        key={link.name}
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        className="cursor-pointer text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white block px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                                        onClick={() => handleNavigation(link)}
                                    >
                                        {link.name}
                                    </ScrollLink>
                                ) : (
                                    <RouterLink
                                        key={link.name}
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white block px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                                    >
                                        {link.name}
                                    </RouterLink>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
