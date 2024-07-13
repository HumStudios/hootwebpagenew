import React from 'react'
import { BackgroundBeams } from './ui/BackgroundBeams';
import { FlipWords } from './ui/flip-words';
import { nest, words } from '@/data';
import MagicButton from './ui/MagicButton';
import ShimmerButton from './ui/ShimmerButton';
import Link from "next/link";
import Image from 'next/image';
const Hero = () => {

    return (
        <section id='home'>
            <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <BackgroundBeams />
                <div className="fixed top-0 left-10 mr-4">
                <Image src="/hoot.png" alt='Hoot' height={80} width={80}/>
                </div>
              

                <div className="flex flex-col justify-center items-center w-full h-full"> {/* Flexbox for centering */}
                    <div className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                        Build
                        <FlipWords words={words} />  <br />
                        Applications with Hoot

                    </div>


                </div>
                <a href="#featured" className="py-5"><ShimmerButton title="Let's Go!!" position="left" /> </a>
            </div>
        </section>
    )
}

export default Hero