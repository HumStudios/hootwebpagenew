import React from 'react'
import { BackgroundBeams } from './ui/BackgroundBeams';
import { FlipWords } from './ui/flip-words';
import { nest, words } from '@/data';
import MagicButton from './ui/MagicButton';
import ShimmerButton from './ui/ShimmerButton';
import Link from "next/link";
import Image from 'next/image';

import { BackgroundBeamsWithCollision } from './ui/bg-beams';
const Hero = () => {

    return (
        <section id='home'>
            <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          
                <div className="fixed top-0 left-10 mr-4">
                <Image src="/hoot.png" alt='Hoot' height={90} width={90}/>
                </div>
              
                <BackgroundBeamsWithCollision>
                <Image src="/hoot2.png" alt='Hum Studios' height={600} width={600}/>
    </BackgroundBeamsWithCollision>
               
                {/* <a href="#featured" className=""><ShimmerButton title="Let's Go!!" position="left" /> </a> */}
            </div>
        </section>
    )
}

export default Hero