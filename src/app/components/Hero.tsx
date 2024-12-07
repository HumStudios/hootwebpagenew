import { logo } from '@/data/images';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-center h-screen relative">
      <div className="flex flex-row w-screen items-center justify-center gap-20 absolute">

        {/* Animated Text */}
        <motion.div
          className="flex flex-col items-end"
          initial={{ x: -500, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 30, delay: 0.2 }}
        >
          <motion.h1
            className="md:text-9xl text-6xl"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.8, }}
          >
            Hum
          </motion.h1>
          <motion.b
            className="md:text-4xl text-2xl"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Studios
          </motion.b>
        </motion.div>

        {/* Animated Logo */}

        <motion.div
          className="w-[150px] sm:w-[200px] md:w-[300px] h-auto"
          initial={{ rotate: -360, x: -200 }}
          animate={{ rotate: 0, x: 0 }}
          transition={{ duration: 1, type: 'tween', stiffness: 100 }}
        >
          <Image
            src={logo}
            alt="logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 300px"
            className="w-[150px] sm:w-[200px] md:w-[300px] h-auto"
          />
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
