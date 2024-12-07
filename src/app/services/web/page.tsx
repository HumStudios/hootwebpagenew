"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ReactLenis from "@studio-freight/react-lenis";

// Tech Stack and Process Data
const techStack = [
    { name: "Next.js", category: "Frontend", description: "Build fast, SEO-friendly web apps with Next.js, leveraging server-side rendering and static site generation." },
    { name: "React", category: "Frontend", description: "Create dynamic, responsive web applications with React, a powerful JavaScript library for building user interfaces." },

    { name: "Angular", category: "Frontend", description: "Develop scalable, single-page web applications with Angular, a full-featured framework for modern web development." },
    { name: "Go", category: "Backend", description: "Efficient, scalable backend services with Go." },
    { name: "Node.js", category: "Backend", description: "Fast and scalable backend using JavaScript and Node.js." },
    { name: "Deno", category: "Backend", description: "A secure runtime for JavaScript and TypeScript, ideal for modern web apps." },
];

const reasons = [
    "Expertise in Full-Stack Web Development",
    "Responsive and User-Centric Web Designs",
    "High-Performance Websites and Web Apps",
    "Optimized for SEO and Speed",
    "Custom Web Solutions to Meet Your Business Needs",
    "Agile Development Process for Fast Turnarounds",
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
                        <h1 className="text-5xl font-bold mb-6">Web Development</h1>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            We create fast, scalable, and user-friendly web applications that are built to grow with your business. From frontend to backend, we have the expertise to bring your ideas to life.
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
                    className=" mx-auto py-16 px-6"
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
                <section className="py-16 px-6">
                    <motion.div
                        className="container mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <h2 className="text-4xl font-bold text-center mb-10">Why Choose Hum Studios?</h2>
                        <p className="text-lg mb-12 text-center">
                            At Hum Studios, we specialize in creating custom web applications using modern technologies. Our solutions are designed to be fast, scalable, and responsive, offering a seamless user experience across devices.
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
                                <p>We begin by understanding your business goals, audience, and the features you need. This phase ensures that your website will be built with purpose and precision, aligning with your objectives.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">2. Design & Prototyping</h3>
                                <p>Our design team creates engaging, user-friendly designs and interactive prototypes. We focus on delivering excellent usability that creates an intuitive user experience for all visitors.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">3. Development & Testing</h3>
                                <p>We build the website using the best practices and cutting-edge technologies. Continuous testing ensures your website is fully optimized for speed, performance, and user experience.</p>
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
                        <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing Together!</h2>
                        <p className="text-lg mb-8">Whether you're looking to create a dynamic web app, an e-commerce platform, or a corporate website, we're here to make it happen. Let's start building your next project today.</p>
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
