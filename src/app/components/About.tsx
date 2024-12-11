import React from "react";
import { MotionDiv, MotionH2 } from "../framer-motio";
import { useInView } from "react-intersection-observer"; // Import the intersection observer

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Triggers the animation once when it's in view
    threshold: 0.1, // Trigger when 50% of the component is in view
  });

  return (
    <section
      id="about"
      ref={ref} // Attach the intersection observer
      className="flex items-center justify-center h-screen lg:px-40"
    >
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-around">
        {/* Animated Column 1 */}
        <MotionDiv
          className="flex flex-col items-center md:items-start lg:items-start justify-start"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >

          <MotionH2
            className="md:text-8xl text-6xl py-5 text-textbronze gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span style={{ display: 'inline-block' }}>
              <span style={{ color: '#000000' }}>H</span>armony
            </span>
            <br />
            <span style={{ display: 'inline-block' }}>
              <span style={{ color: '#000000' }}>U</span>nity
            </span>
            <br />
            <span style={{ display: 'inline-block' }}>
              <span style={{ color: '#000000' }}>M</span>anifestation
            </span>
            <br />  </MotionH2>
        </MotionDiv>

        {/* Animated Border */}
        <MotionDiv
          className="md:h-32 lg:h-32 px-10 border-l-2 border-gray-500"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        ></MotionDiv>

        {/* Animated Text */}
        <MotionDiv
          className="md:w-1/3 lg:w-1/2 w-full  text-justify"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            Hum Studios is a pioneering software and game development company committed to delivering innovative solutions. Our dedication to creativity, technology, and expertise enables us to craft impactful experiences that adapt to the evolving needs of the contemporary world. As a dynamic startup, we transform ambitious concepts into tangible realities, shaping the future through our work.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default About;
