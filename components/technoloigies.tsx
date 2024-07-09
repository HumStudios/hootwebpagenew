import { tech, technology_description } from '@/data'
import React from 'react'
import { ThreeDCard } from './ui/threeDCard'


const Technoloigies = () => {
    return (
        <section className="w-full" id='technologies'>
            <div className='md:py-32'>
                <h1 className='text-2xl md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold'>
                    Work with us

                </h1>
                <h1 className='font-semibold text-4xl md:text-6xl text-center  text-hoot font-sans py-5'>
                    Technology we serve

                </h1>
                <p className='text-center py-5 text-gray-200'>
                    {technology_description}
                </p>
                <div className="flex gap-2  lg:gap-5 justify-center">
                    {tech.map(({ key, image, title }) => (

                        <ThreeDCard img1={image} title={title} imgClassName="h-12 " key={key} />


                    ))}

                </div>
            </div>
        </section>
    )
}

export default Technoloigies