"use client"
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from "next/image";
import { contact_us, contactDetails, courseForm, nest } from '@/data';
import ShimmerButton from '@/components/ui/ShimmerButton';
import Link from 'next/link';
const Page = () => {
  const sendMail =  () => {
    console.log("rtes");
    window.location.href = "mailto:hoot.io.dev@gmail.com"
}
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <Image src="/hoot.png" alt='' width={80} height={80}></Image>
       <div className='h-80 md:h-96 w-full items-center justify-center flex flex-col bg-neutral-900 rounded-2xl'>

        <Image src="/nest.png" alt='NEST' width={150} className='rounded-full  border-hoot border-4'
        height={150}
        >

        </Image>
        <p className='text-center mt-5'>
        Ready to start learning? Click the button below to enter Hoot Nest and begin your journey!
        </p>
       <Link href={nest[1].link} className='abs'>
                <div className=' rounded-full  bg-hoot h-10 md:h-14 w-80 mt-5 md:mt-11 items-center flex text-center text-neutral-950 justify-center font-bold text-2xl md:text-3xl '>
                Go to Nest
                </div>
                </Link>
       </div>

                <h1 className='text-4xl md:text-7xl bg-clip-text text-hoot  font-sans font-bold mt-10'>
      News
        </h1>  
        <h1 className='text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mt-10'>
      Online Coding Bootcamp
        </h1>
        <Image className='mt-20 rounded-2xl border border-hoot' src="/course.png" alt='Course' height="1000" width="1000"/>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 mt-10">

            <p className={twMerge("text-2xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
             
            {item?.link &&(
                <Link href={item.link}>
                <ShimmerButton title='Join Now' position='left'/>
                </Link>
              )}
              {item?.image && (
               <Link href={item.link}>
               <Image
                 src={item.image}
                 alt="blog thumbnail"
                 height="800"
                 width="800"
                 className="rounded-lg mb-10 object-cover py-5"
               />
              </Link>
                
              )}
            
              {item.description}
            </div>
          </div>
        ))}
        <div className='flex flex-col items-center h-64 px-10 gap-2 bg-hoot rounded-xl '>
                <h1 className='text-2xl md:text-4xl text-left bg-clip-text  text-neutral-950 font-sans font-bold py-5'>CONTACT US</h1>
              
               
                <div className='rounded-2xl  w-64  md:w-80 bg-neutral-950  flex-row items-center py-2 px-2'>
                    <span className='text-left py-5  md:text-base lg:text-base text-xs'>Phone : {contactDetails[0].data}</span>

                    </div>  
                    <div className='rounded-2xl  w-64  md:w-80 bg-neutral-950  flex-row items-center py-2 px-2'>
                    <span className='text-left text-xs md:text-base lg:text-base'>Email : {contactDetails[1].data}</span>

                    </div>
                    
                <form className='md:py-5 py-2'>
                <button formAction={sendMail} className=' bg-slate-100 md:px-20 md:py-2 px-5 rounded-2xl  w-64 md:w-80 py-1 text-neutral-950 font-bold '>Contact us!</button>
                </form>
            </div>
      </div>
    </TracingBeam>
  )
}

export default Page

const dummyContent = [
  {
    title: "Unlock Your Coding Potential with Hoot and Show your interest by filling the form",
    description: (
      <>
        <p className='text-base py-2'>
        Are you looking to break into the exciting world of programming? Or perhaps you're a seasoned developer seeking to expand your skillset? Hoot offers a comprehensive suite of programs designed to empower learners of all levels. Our beginner-friendly courses provide a solid foundation in in-demand programming languages, making coding accessible and engaging.
        </p>

      </>
      
    ),
    link: courseForm,
    image:
      "/c1.png",
  },
  {
    title: "Tailored Learning for Continuous Growth",
    description: (
      <>
        <p>
        Hoot doesn't stop at the basics. We offer advanced courses that delve deeper into specific programming languages, allowing you to master complex concepts and refine your coding abilities.  Whether you're aiming to become a web developer, build mobile applications, or delve into data science, Hoot equips you with the knowledge and expertise to achieve your coding goals.
        </p>
       
      </>
    ),
    badge: "Changelog",
    link:"",
    image:
    "/c2.jpg",
  },
 
];
