import React from 'react';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { game_dev, mobile_dev, web_dev } from '@/data/images';
import Link from 'next/link';
import { MotionDiv, MotionH2 } from '../framer-motio';

const Feature = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Triggers the animation once when it's in view
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
                className="md:text-[10rem] text-6xl font-bold text-textbronze tracking-tight leading-tight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                We do things<br />
                Our way

            </MotionH2>
           {/* Cards Section */}
            <MotionDiv
            
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2" 
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            >
        {/* Card 1 */}
<Link href="services/mobile">
<div className="bg-gradient-to-br  p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
    <div className="flex justify-center items-center mb-6">
        <div className="text-6xl">
           
        </div>
    </div>
    <h2 className="text-3xl font-extrabold mb-4 transition-all ease-in-out">
        Mobile App Development
    </h2>
    <p className="text-lg opacity-90 mb-6 transition-all ease-in-out duration-300">
        We create intuitive and responsive mobile applications that provide seamless user experiences and help businesses expand their reach.
    </p>
    <div
      
        className="bg-white text-textbronze hover:bg-textbronze hover:text-white py-3 px-8 rounded-full font-semibold transition-colors ease-in-out duration-300 "
    >
        View More
    </div>
</div>
</Link>

<Link href="services/web">
{/* Card 2 */}
<div className="bg-gradient-to-br  p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
    <div className="flex justify-center items-center mb-6">
        <div className="text-6xl">
            {/* Optional Icon */}
        </div>
    </div>
    <h2 className="text-3xl font-extrabold mb-4 transition-all ease-in-out">
        Web Development
    </h2>
    <p className="text-lg opacity-90 mb-6 transition-all ease-in-out duration-300">
        We specialize in building modern and responsive websites that drive engagement, enhance brand presence, and offer exceptional functionality.
    </p>
    <div
        
        className="bg-white text-textbronze hover:bg-textbronze hover:text-white py-3 px-8 rounded-full font-semibold transition-colors ease-in-out duration-300"
    >
        View More
    </div>
</div>
</Link>

<Link href="services/game">
{/* Card 3 */}
<div className="bg-gradient-to-br  p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
    <div className="flex justify-center items-center mb-6">
        <div className="text-6xl">
            {/* Optional Icon */}
        </div>
    </div>
    <h2 className="text-3xl font-extrabold mb-4 transition-all ease-in-out">
        Game Development
    </h2>
    <p className="text-lg opacity-90 mb-6 transition-all ease-in-out duration-300">
        Our game development services combine creativity and cutting-edge technology to create engaging and immersive gaming experiences across platforms.
    </p>
    <div
        
        className="bg-white text-textbronze hover:bg-textbronze hover:text-white py-3 px-8 rounded-full font-semibold transition-colors ease-in-out duration-300"
    >
        View More
    </div>
</div>
</Link>
            </MotionDiv>
            
        </section>
    );
};

export default Feature;
