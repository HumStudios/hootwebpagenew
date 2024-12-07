"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ReactLenis from "@studio-freight/react-lenis";

// Tech Stack and Process Data
const techStack = [
    { name: "Flutter", category: "Cross-Platform", description: "Build apps for both iOS and Android with a single codebase." },
    { name: "Go", category: "Backend", description: "Efficient, scalable backend services with Go." },

    { name: "Swift", category: "Native iOS", description: "Build high-performance, native iOS apps with Swift." },
    { name: "Node.js", category: "Backend", description: "Fast and scalable backend using JavaScript and Node.js." },
    { name: "React Native", category: "Cross-Platform", description: "Develop cross-platform apps using JavaScript and React." },

    { name: "Deno", category: "Backend", description: "A secure runtime for JavaScript and TypeScript, ideal for modern web apps." },
];

const reasons = [
    "Expertise in Full-Stack Development",
    "Cutting-Edge Technologies for iOS, Android, and Cross-Platform Apps",
    "Custom Solutions Tailored to Your Needs",
    "Seamless Integration with APIs",
    "Scalable and Performant Applications",
    "Fast Development Cycles with Agile Methodology",
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
                        <h1 className="text-5xl font-bold mb-6">Mobile App Development</h1>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            We create high-performance, feature-rich mobile apps using the latest technologies. Whether it's native or cross-platform, we've got you covered.
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
                    <h2 className="text-4xl font-bold text-center mb-10">Our Technology Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                        <h2 className="text-4xl font-bold text-center mb-10">Why Choose Hum Studios?</h2>
                        <p className="text-lg mb-12 text-center">
                            At Hum Studios, we craft mobile applications using a range of technologies that fit your specific needs.
                            Whether you need a native app for iOS/Android or a cross-platform solution, we ensure quality, performance,
                            and scalability.
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
                        <h2 className="text-4xl font-bold text-center mb-10">Our Development Process</h2>
                        <div className="flex flex-col md:flex-row justify-between gap-12">
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">1. Discovery & Planning</h3>
                                <p>We start by understanding your business goals, target audience, and the features needed. This phase includes thorough research and planning to ensure your app aligns with your vision.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">2. Design & Prototyping</h3>
                                <p>Our design team creates intuitive, user-centric designs and prototypes. We focus on seamless user experiences that elevate the overall usability of your app.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">3. Development & Testing</h3>
                                <p>During the development phase, we integrate the latest technologies and frameworks, ensuring continuous testing and feedback loops to guarantee performance and scalability.</p>
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
                        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-lg mb-8">Whether you're building a mobile app for iOS, Android, or both, our team is ready to help you bring your idea to life.</p>
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
