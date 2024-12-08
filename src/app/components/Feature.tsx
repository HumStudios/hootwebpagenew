import React from 'react';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { game_dev, mobile_dev, web_dev } from '@/data/images';
import Link from 'next/link';
import { MotionDiv, MotionH2 } from '../framer-motio';

const Feature = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Triggers the animation once when it's in view
        threshold: 0.1, // Trigger when 50% of the component is in view
    });

    // Cool animation variants
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <section id="featured" className="py-5 md:py-14 lg:py-14 px-6" ref={ref}>
            <MotionH2
                className="text-center text-4xl font-bold "
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                What we do

            </MotionH2>
            <p className="text-lg text-gray-600 text-center my-6">
                From Concept to Execution, We Build Exceptional Digital Experiences
            </p>
            <MotionDiv
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                {/* Mobile App Development */}
                <Link href="/services/mobile">
                    <MotionDiv
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 h-[26rem] "

                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={cardVariants}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Image
                            src={mobile_dev}
                            alt="Mobile Development"
                            width={500} // Set to the actual width or desired display width
                            height={300} // Set to the aspect ratio you want (e.g., 16:9 ratio)
                            className="h-48 w-full object-cover rounded-lg " // Ensure the image scales correctly
                        />
                        <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
                        <p className="text-gray-700">
                            We create intuitive and responsive mobile applications that provide seamless user experiences and help businesses expand their reach.
                        </p>

                        <button className="bg-slate-800 text-white mt-2 py-1 px-8 rounded-md hover:bg-slate-950 transition duration-300">
                            View
                        </button>

                    </MotionDiv>
                </Link>

                {/* Web Development */}
                <Link href="/services/web">
                    <MotionDiv
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 h-[26rem] "
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={cardVariants}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Image
                            src={web_dev}
                            alt="Web Development"
                            width={500} // Set to the actual width or desired display width
                            height={300} // Set to the aspect ratio you want (e.g., 16:9 ratio)
                            className="h-48 w-full object-cover rounded-lg " // Ensure the image scales correctly
                        />
                        <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                        <p className="text-gray-700">
                            We specialize in building modern and responsive websites that drive engagement, enhance brand presence, and offer exceptional functionality.
                        </p>

                        <button className="bg-slate-800 text-white mt-2 py-1 px-8 rounded-md hover:bg-slate-950 transition duration-300">
                            View
                        </button>

                    </MotionDiv>
                </Link>

                {/* Game Development */}
                <Link href="/services/game">
                    <MotionDiv
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl  transition-shadow transform hover:scale-105 h-[26rem] "
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={cardVariants}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <Image
                            src={game_dev}
                            alt="Game Development"
                            width={500} // Set to the actual width or desired display width
                            height={300} // Set to the aspect ratio you want (e.g., 16:9 ratio)
                            className="h-48 w-full object-cover rounded-lg " // Ensure the image scales correctly
                        />
                        <h3 className="text-xl font-semibold mb-4">Game Development</h3>
                        <p className="text-gray-700">
                            Our game development services combine creativity and cutting-edge technology to create engaging and immersive gaming experiences across platforms.
                        </p>

                        <button className="bg-slate-800 text-white mt-2 py-1 px-8 rounded-md hover:bg-slate-950 transition duration-300">
                            View
                        </button>

                    </MotionDiv>
                </Link>

                {/* Software Development */}


            </MotionDiv>
        </section>
    );
};

export default Feature;
