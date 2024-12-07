"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { MotionA, MotionDiv } from "../framer-motio";

const Footer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const socialLinks = [
        {
            href: "https://github.com/HumStudios",
            icon: <FaGithub className="text-2xl" />,
            label: "GitHub",
        },
        {
            href: "https://x.com/humstudios_in?t=NgMDik8rW3Fw3WF2rAPZCw&s=09",
            icon: <FaTwitter className="text-2xl" />,
            label: "Twitter",
        },
        {
            href: "https://www.instagram.com/humstudios.in/profilecard/?igsh=dDg0Ym82aHRwcG82",
            icon: <FaInstagram className="text-2xl" />,
            label: "Instagram",
        },
        {
            href: "https://youtube.com/@humstudios_in?si=cS99iPTFnb-J0msh",
            icon: <FaYoutube className="text-2xl" />,
            label: "YouTube",
        },
        // {
        //     href: "https://www.linkedin.com/in/siva-sankar-1b41091b8/",
        //     icon: <FaLinkedin className="text-2xl" />,
        //     label: "Linkedin",
        // },
        {
            href: "https://www.facebook.com/share/KsmG88ApCCpP6T5f/?mibextid=qi2Omg",
            icon: <FaFacebook className="text-2xl" />,
            label: "Facebook",
        },

    ];

    return (
        <footer className="bg-gray-900 text-gray-300 py-6" ref={ref}>
            {/* Header Section with Animation */}
            <MotionDiv
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Logo and Company Info */}
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h1 className="text-xl font-bold text-white">Hum Studios</h1>
                    <p className="text-sm text-gray-400">Innovative solutions for modern-day challenges.</p>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-6">
                    {socialLinks.map((link, index) => (
                        <MotionA
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors duration-200"
                            aria-label={link.label}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link.icon}
                        </MotionA>
                    ))}
                </div>
            </MotionDiv>

            {/* Footer Bottom */}
            <MotionDiv
                className="text-center mt-6 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                &copy; {new Date().getFullYear()} Hum Studios. All rights reserved.
            </MotionDiv>
        </footer>
    );
};

export default Footer;
