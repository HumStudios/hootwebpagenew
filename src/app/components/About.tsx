import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the intersection observer

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Triggers the animation once when it's in view
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  return (
    <section
      id="about"
      ref={ref} // Attach the intersection observer
      className="flex items-center justify-center h-screen lg:px-40"
    >
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-around">
        {/* Animated Column 1 */}
        <motion.div
          className="flex flex-col items-center md:items-start lg:items-start justify-start"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <h1 className="md:text-4xl text-2xl"> Hum </h1>
          <b className="md:text-xl text-xs"> Studios </b>
          <motion.h1
            className="md:text-6xl text-3xl py-5"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Small wings
            <br /> big ideas
          </motion.h1>
        </motion.div>

        {/* Animated Border */}
        <motion.div
          className="md:h-32 lg:h-32 w-32 border-l-2 border-gray-500"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        ></motion.div>

        {/* Animated Text */}
        <motion.div
          className="md:w-1/2 lg:w-1/2 w-full  text-justify"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            Hum Studios is a forward - thinking software and game development
            company committed to delivering innovative solutions to contemporary
            challenges.Inspired by the agility and precision of the hummingbird,
            we combine creativity, technology, and expertise to craft impactful
            experiences.As a startup, we pride ourselves on our ability to
            adapt, innovate, and transform ideas into reality, creating
            solutions that resonate in today's dynamic world.At Hum Studios, we
            don't just develop software—we shape the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
