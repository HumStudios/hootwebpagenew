// pages/why-choose-us.js
import { useInView } from "react-intersection-observer";
import { MotionDiv } from "../framer-motio";
const WhyChooseUs = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Unified animation variants
    const scaleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            ref={sectionRef}
        >
            <div className="container px-4 py-12">
                {/* Title Section */}
                <MotionDiv
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                    variants={scaleVariants}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Why Choose Hum Studios?
                    </h1>
                    <p className="text-lg text-gray-600">We bring solutions</p>
                </MotionDiv>

                {/* Card Section */}
                <MotionDiv
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                    variants={scaleVariants}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {/* Innovation Card */}
                    <MotionDiv
                        variants={scaleVariants}
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            Innovation
                        </h3>
                        <p className="text-gray-600">
                            At Hum Studios, we strive to push the boundaries of creativity with every project, offering
                            innovative solutions that redefine the digital experience.
                        </p>
                    </MotionDiv>

                    {/* Expertise Card */}
                    <MotionDiv
                        variants={scaleVariants}
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl "
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            Expertise
                        </h3>
                        <p className="text-gray-600">
                            Our team is composed of experienced developers and designers who specialize in both software and
                            game development, ensuring top-quality products that meet the highest standards.
                        </p>
                    </MotionDiv>

                    {/* Collaboration Card */}
                    <MotionDiv
                        variants={scaleVariants}
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl "
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            Collaboration
                        </h3>
                        <p className="text-gray-600">
                            We value our partnerships and work closely with our clients to understand their vision, ensuring
                            that the final product perfectly aligns with their expectations and goals.
                        </p>
                    </MotionDiv>
                </MotionDiv>
            </div>
        </div>
    );
};

export default WhyChooseUs;