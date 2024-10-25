"use client"
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from "next/image";
import { contactDetails, homeLink } from '@/data';
const Page = () => {
  const sendMail =  () => {
    
    console.log("rtes");
    window.location.href = "mailto:hoot.io.dev@gmail.com"
}
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
      <a href={homeLink}>
           <Image src="/hoot.png" alt='Hoot' height={80} width={80} />
       </a>
        <h1 className='text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold'>
          Software Development
        </h1>

        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 mt-10">

            <p className={twMerge("text-2xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="800"
                  width="800"
                  className="rounded-lg mb-10 object-cover"
                />
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
    title: "Empowering Innovation: Hoot's Development Approach",
    description: (
      <>
        <p className='text-base py-2'>
        At Hoot, we believe in working closely with you to create innovative software solutions that are easy to use and meet your specific needs. We use a flexible approach with short development cycles, allowing for continuous feedback and adjustments. This ensures we stay on the same page and deliver exceptional software quickly. Throughout the process, we perform thorough testing at every stage to guarantee a reliable and bug-free product. Additionally, we use automation to streamline software releases, getting the final product to you faster.
        </p>

      </>
    ),

    image:
      "/sw1.jpg",
  },
  {
    title: "Ensuring Excellence: Hoot's Quality Assurance Process",
    description: (
      <>
        <p>
        At Hoot, quality is our top priority. We want to deliver software that not only looks good but also works flawlessly and securely. We achieve this through a multi-step testing process that examines the software at different stages, catching any potential issues early on. We also use automated testing tools for efficiency and have a system to track and fix any bugs that are found. Finally, we continuously monitor our software after it's released to proactively identify and address any problems before they affect you.
        </p>
       
      </>
    ),
    badge: "Changelog",
    image:
    "/sw2.jpg",
  },
  {
    title: "Our Commitment",
    description: (
      <>
        <p>
        Hoot is passionate about building software that empowers your success.  By combining a development approach focused on your needs with a rigorous QA process, we deliver innovative, reliable, and top-quality products. We are confident that our dedication to development best practices and rigorous QA will ensure exceptional software that propels your business forward.
        </p>
      </>
    ),
  
    image:
    "/sw3.jpg",
  },
];
