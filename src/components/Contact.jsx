import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        emailjs.sendForm('service_uc8mxyp', 'template_53e4g1y', form.current, 'ULvf6gvow0gU2lLl0') // Placeholder keys
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.error(error.text);
                setLoading(false);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">
                        Get In <span className="text-primary">Touch</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Let's Talk</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
                                I'm open to discussing web development projects or partnership opportunities.
                            </p>

                            <div className="flex items-center space-x-4 text-slate-700 dark:text-slate-300">
                                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full text-primary shadow-sm">
                                    <FaEnvelope size={20} />
                                </div>
                                <span className="font-semibold">mohittiwarigcmb@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4 text-slate-700 dark:text-slate-300">
                                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full text-primary shadow-sm">
                                    <FaPhone size={20} />
                                </div>
                                <span className="font-semibold">+91-8252435204</span>
                            </div>
                            <div className="flex items-center space-x-4 text-slate-700 dark:text-slate-300">
                                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full text-primary shadow-sm">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <span className="font-semibold">Phagwara, Punjab, India</span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form ref={form} onSubmit={sendEmail} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
                            <div className="mb-6">
                                <label className="text-slate-700 dark:text-slate-400 text-sm font-semibold mb-2 block">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="text-slate-700 dark:text-slate-400 text-sm font-semibold mb-2 block">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="text-slate-700 dark:text-slate-400 text-sm font-semibold mb-2 block">Message</label>
                                <textarea
                                    name="message"
                                    className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors h-32 resize-none font-medium"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-500 text-center text-sm mt-4">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 text-center text-sm mt-4">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
