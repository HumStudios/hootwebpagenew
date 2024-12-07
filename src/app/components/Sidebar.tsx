"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <motion.div
            className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-40 shadow-lg ${isOpen ? 'block' : 'hidden'
                }`}
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? '0%' : '100%' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
            <button
                className="absolute top-4 right-4 text-white"
                onClick={onClose} // Close the sidebar
            >
                <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <nav className="flex flex-col p-6 space-y-4">
                <Link
                    to="about"
                    smooth={true}
                    duration={800}
                    className="text-xl font-light cursor-pointer"
                    onClick={onClose}
                >
                    About
                </Link>
                <Link
                    to="featured"
                    smooth={true}
                    duration={800}
                    className="text-xl font-light cursor-pointer"
                    onClick={onClose}
                >
                    Featured
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={800}
                    className="text-xl font-light cursor-pointer"
                    onClick={onClose}
                >
                    Contact
                </Link>
            </nav>
        </motion.div>
    );
};

export default Sidebar;
