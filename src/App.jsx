import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Blog from './components/Blog';

import ComingSoon from './components/ComingSoon';

function App() {
    return (
        <Router>
            <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-primary selection:text-white">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <About />
                                <Skills />
                                <Projects />
                                <Contact />
                            </>
                        }
                    />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/live-demo" element={<ComingSoon />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
