"use client"
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from "next/image";
import { contactDetails } from '@/data';
const Page = () => {
    const sendMail =  () => {
    
        console.log("rtes");
        window.location.href = "mailto:info@hoot.services"
    }
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <Image src="/hoot.png" alt='' width={80} height={80}></Image>

        <h1 className='text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold'>
         Digital Marketing
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
    title: "Hoot: Your Partner in Digital Growth",
    description: (
      <>
        <p className='text-base py-2'>
        At Hoot, we believe in fostering long-term partnerships with our clients. We don't just create campaigns, we build relationships. Our ongoing support ensures your digital marketing efforts stay on track and adapt to the latest trends.  With Hoot by your side, you can gain valuable insights into your audience and campaign performance, allowing you to continuously refine your strategy for optimal results. Let us empower your business to thrive in the digital landscape.
        </p>

      </>
    ),

    image:
      "/dm1.png",
  },
  {
    title: "Level Up Your Online Presence with Hoot",
    description: (
      <>
        <p>
        Struggling to navigate the ever-evolving world of digital marketing? Look no further than Hoot! We're your one-stop shop for all things internet marketing, providing expert assistance to businesses of all sizes. Our team of passionate marketers works closely with you to craft a customized strategy that aligns with your unique goals. Whether you're aiming to boost brand awareness, drive website traffic, or generate leads, Hoot has the tools and expertise to make it happen.
        </p>
       
      </>
    ),
    badge: "Changelog",
    image:
    "/dm2.png",
  },
 
];
