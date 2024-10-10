import { about, people, socialMedia } from '@/data'
import React from 'react'
import Image from "next/image";
import { AnimatedTooltip } from './ui/animated-tooltip';
const About = () => {
  return (
   <section className="w-full py-28" id='about'>
      {/* background grid */}
      <div className="w-full relative">
            <h1 className='text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold'>
           Get to know us!
           
        </h1>

        <div className=" flex  flex-col justify-between items-center bottom-10">
        <h1 className='text-2xl md:text-4xl text-left bg-clip-text  text-hoot font-sans font-bold'>Our Hoots</h1>
        <div className="flex flex-row items-center justify-center mb-10 w-full mt-16">
      <AnimatedTooltip items={people} />
    </div>
        <p className='text-sm md:text-base text-gray-200 text-center w-2/3 py-5'>{about}</p>
        <div className="flex items-center gap-2 md:gap-6">
          
                    {socialMedia.map((info) => (
                      <a href={info.link}>
                          <div
                            key={info.key}
                            
                            className="w-10 h-10 cursor-pointer"
                        >
                            <Image src={info.img} alt='about' width={40} height={40}/>
                        </div>
                      </a>
                    ))}
                </div>
                
                <p className="md:text-base text-sm md:font-normal font-light py-10">
                    Copyright © 2024 Hum Studios
                </p>
                <img src="./hoot.png" alt="hoot" width={120} height={30} />

               
            </div>
            </div>

   </section>
  )
}

export default About