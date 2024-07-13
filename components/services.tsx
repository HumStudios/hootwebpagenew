
import { services } from '@/data';
import React, { useState } from 'react'

import { BackgroundBeams } from './ui/BackgroundBeams';


import { SerivceThreeDCard } from './ui/service-card';


const Services = () => {

    return (
        <section className="w-full" id='services'>
            <div className='md:py-36 py-32'>
                
                <h1 className='text-2xl md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold'>
                    What we do?

                </h1>
                <h1 className='font-semibold text-4xl md:text-6xl text-center  text-hoot font-sans py-5'>
                    Services

                </h1>
               

                    <div className="sm:flex-row md:flex gap-2  lg:gap-5 justify-center items-center ">
                        {services.map(({ link,key, image, title, description }) => (


                            <SerivceThreeDCard image={image} des={description} title={title} link={link}/>

                        ))}
                    </div>
                
            </div>
        </section>
    )
}

export default Services