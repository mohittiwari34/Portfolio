import React from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ComingSoon = () => {
    const [searchParams] = useSearchParams();
    const project = searchParams.get('project') || 'Project';

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300 px-4">
            <div className="text-center">
                <div className="text-6xl md:text-8xl mb-6">🚀</div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-6">
                    Coming Sonn...
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-2">
                    The live demo for <span className="font-bold text-slate-800 dark:text-white">{project}</span> is currently being deployed.
                </p>
                <p className="text-md text-slate-500 dark:text-slate-500 mb-10">
                    Check back shortly!
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-violet-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <FaArrowLeft /> Back to Project
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;
