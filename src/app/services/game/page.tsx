"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ReactLenis from "@studio-freight/react-lenis";

// Tech Stack and Process Data
const techStack = [
    { name: "Godot", category: "Game Engine", description: "Open-source, flexible, and powerful game engine for creating 2D and 3D games." },
    { name: "Unreal Engine", category: "Game Engine", description: "A leading game engine for creating high-performance 3D games with stunning visuals." },
    { name: "Flutter Flame", category: "Game Development", description: "A lightweight game engine for creating 2D games in Flutter, offering seamless performance and scalability." },
];

const reasons = [
    "Expertise in Game Design and Development",
    "Custom Solutions for Interactive, Immersive Experiences",
    "Performance-Optimized Games for Multiple Platforms",
    "Collaboration with Creative Artists and Designers",
    "Seamless Integration with Backend Systems",
    "Fast Prototyping with Agile Development",
];

const Page = () => {
    return (
        <ReactLenis root>
            <main className="min-h-screen text-gray-800">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-28 px-8">
                    <motion.div
                        className="container mx-auto text-center relative z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl font-bold mb-6">Game Development</h1>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            At Hum Studios, we specialize in crafting high-quality games with engaging gameplay and stunning visuals. From concept to deployment, we deliver games for various platforms.
                        </p>
                        <Link href="/#contact">
                            <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300">
                                Get in touch
                            </button>
                        </Link>
                    </motion.div>
                </section>

                {/* Technology Stack Section */}
                <motion.div
                    className="container mx-auto py-16 px-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <h2 className="text-4xl font-bold text-center mb-10">Our Game Development Tech Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-xl p-8 text-center rounded-lg border border-gray-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <h4 className="text-2xl font-semibold mb-2">{tech.name}</h4>
                                <p className="text-sm text-gray-500">{tech.category}</p>
                                <p className="text-sm text-gray-600 mt-2">{tech.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Why Choose Us Section */}
                <section className=" py-16 px-6">
                    <motion.div
                        className="container mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <h2 className="text-4xl font-bold text-center mb-10">Why Choose Hum Studios for Game Development?</h2>
                        <p className="text-lg mb-12 text-center">
                            We bring your gaming ideas to life with state-of-the-art tools and expertise. Whether you're creating a mobile game, a 3D immersive experience, or an interactive platform, we ensure smooth gameplay, optimized performance, and immersive experiences.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-4 bg-white p-6 rounded-md shadow-sm border border-gray-200 hover:bg-blue-100 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
                                        {index + 1}
                                    </div>
                                    <span>{reason}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Our Process Section */}
                <section className="py-20 px-6">
                    <motion.div
                        className="container mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <h2 className="text-4xl font-bold text-center mb-10">Our Game Development Process</h2>
                        <div className="flex flex-col md:flex-row justify-between gap-12">
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">1. Concept & Ideation</h3>
                                <p>We start by understanding your vision and defining the concept. We’ll work with you to design unique gameplay mechanics, levels, and overall experience.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">2. Game Design & Prototyping</h3>
                                <p>Our design team creates intuitive and interactive prototypes to visualize the game’s mechanics and art direction, ensuring we have a clear path forward.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">3. Development & Testing</h3>
                                <p>Using the latest game engines, we bring your game to life, integrating all features and conducting continuous testing to ensure a polished, high-performing experience.</p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Call-to-Action Section */}
                <section className="bg-gray-900 text-white py-16 px-6">
                    <motion.div
                        className="container mx-auto text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Ready to Build Your Game?</h2>
                        <p className="text-lg mb-8">Whether you're launching your first game or looking for a development partner for a major project, we’re here to make it happen. Let’s create something amazing together.</p>
                        <Link href="/#contact">
                            <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300">
                                Contact Us Today
                            </button>
                        </Link>
                    </motion.div>
                </section>
            </main>
        </ReactLenis>
    );
};

export default Page;
