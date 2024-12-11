"use client";
// pages/contact.js

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser'
import { MotionDiv } from '../framer-motio';
const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('');

        try {
            const templateParams = {
                to_name: "Hum Studios",
                from_name: formData.name, // Match the template field
                from_email: formData.email, // Match the template field
                message: formData.message, // Match the template field
            };
            // Replace with your actual service ID, template ID, and user ID from EmailJS
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // Service ID
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", // Template ID
                templateParams, // Template parameters
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "" // User ID
            );

            if (response.status === 200) {
                setFormStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            } else {
                setFormStatus('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setFormStatus('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='contact' ref={ref}>
            <div className="min-h-screen flex flex-col justify-center items-center py-16 px-4">
                {/* Header Section with animation */}
                <MotionDiv

                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600">
                        We'd love to hear from you. Reach out to us for any inquiries or collaborations!
                    </p>
                </MotionDiv>

                {/* Contact Form Section */}
                <MotionDiv

                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl"
                >
                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:bg-white focus:border-blue-100"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus::bg-white focus:border-blue-100"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-2 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:bg-white focus:border-blue-100"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-slate-800 text-white font-semibold py-3 rounded-md hover:bg-slate-950 transition duration-200"

                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    {/* Status Message */}
                    {formStatus && (
                        <p className={`mt-4 text-center ${formStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                            {formStatus}
                        </p>
                    )}
                </MotionDiv>
            </div>
        </section>
    );
};

export default Contact;
