// pages/why-choose-us.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true, // Triggers the animation once when it's in view
        threshold: 0.5, // Trigger when 50% of the component is in view
    });

    const { ref: cardRef, inView: cardInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="container px-4 py-12">
                {/* Title Section */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Why Choose Hum Studios?
                    </h1>
                    <p className="text-lg text-gray-600">
                        We bring solutions
                    </p>
                </motion.div>

                {/* Card Section */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Innovation Card */}
                    <motion.div
                        ref={cardRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: cardInView ? 1 : 0, x: cardInView ? 0 : -50 }}
                        transition={{ duration: 1 }}
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Innovation</h3>
                        <p className="text-gray-600">
                            At Hum Studios, we strive to push the boundaries of creativity with every project, offering
                            innovative solutions that redefine the digital experience.
                        </p>
                    </motion.div>

                    {/* Expertise Card */}
                    <motion.div
                        ref={cardRef}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: cardInView ? 1 : 0, x: cardInView ? 0 : 50 }}
                        transition={{ duration: 1 }}
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Expertise</h3>
                        <p className="text-gray-600">
                            Our team is composed of experienced developers and designers who specialize in both software and
                            game development, ensuring top-quality products that meet the highest standards.
                        </p>
                    </motion.div>

                    {/* Collaboration Card */}
                    <motion.div
                        ref={cardRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: cardInView ? 1 : 0, x: cardInView ? 0 : -50 }}
                        transition={{ duration: 1 }}
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                        <p className="text-gray-600">
                            We value our partnerships and work closely with our clients to understand their vision, ensuring
                            that the final product perfectly aligns with their expectations and goals.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
