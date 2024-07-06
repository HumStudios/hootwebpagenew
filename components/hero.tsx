import React from 'react'

import { FaLocationArrow } from 'react-icons/fa';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { FlipWords } from './ui/flip-words';

const Hero = () => {
    const words = ["Better", "Asthetic", "Awsome", "Cool",];
    return (
        <section id='home'>
             <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <BackgroundBeams/>
<div className="fixed top-0 left-10">
    <img
        src="/hoot.png"
        alt="Hoot"
        className="w-20 h-20 ml-0 mt-0 mr-4 rounded-full"
    />
</div>


<div className="flex flex-col justify-center items-center w-full h-full"> {/* Flexbox for centering */}
    <div className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
        Build
        <FlipWords words={words} />  <br />
        Applciations with Hoot
    </div>
        <div className='py-10'>
            <a href="#services">
             
            </a>
        </div>
    
</div>
</div>
        </section>
    )
}

export default Hero