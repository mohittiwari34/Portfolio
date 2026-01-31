import React from 'react';
import { motion } from 'framer-motion';
import { FaPencilAlt } from 'react-icons/fa';

const Blog = () => {
    return (
        <section className="pt-24 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                        My <span className="text-primary">Blog</span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                        Thoughts, tutorials, and insights on web development.
                    </p>

                    <div className="bg-white dark:bg-slate-800 p-12 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl max-w-2xl mx-auto">
                        <FaPencilAlt className="text-6xl text-primary mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Coming Soon!</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            I'm currently crafting some awesome articles. Stay tuned!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
