import React from 'react'
import { MotionH2 } from '../framer-motio'
import { useInView } from 'react-intersection-observer';

const Technologies = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
});

  return (
    <div
    className="min-h-screen flex items-center justify-center"
    ref={sectionRef}
>
    <div className="container px-4 py-12 ">
        {/* Title Section */}
        <MotionH2
        className="md:text-[5rem] text-6xl font-bold text-textbronze tracking-tight leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : -50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
    >
        Why choose Hum

    </MotionH2>
</div></div>
  )
}

export default Technologies