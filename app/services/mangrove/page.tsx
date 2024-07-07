"use client"
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from "next/image";
import { contactDetails } from '@/data';
const Page = () => {
    const sendMail =  () => {
    
        console.log("rtes");
        window.location.href = "mailto:hoot.io.dev@gmail.com"
    }
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <Image src="/hoot.png" alt='' width={80} height={80}></Image>

        <h1 className='text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold'>
         Mangrove
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
    title: "Effortless Billing with Mangrove",
    description: (
      <>
        <p className='text-base py-2'>
        Managing invoices and payments can be a time-consuming hassle. Mangrove streamlines this process with its innovative billing software, making it easier than ever to stay on top of your finances. Our user-friendly platform simplifies invoice creation, allowing you to generate professional documents in just a few clicks.
        </p>

      </>
    ),

    image:
      "/m1.png",
  },
  {
    title: "Gain Control and Insights",
    description: (
      <>
        <p>
        Mangrove goes beyond basic invoicing. The software automates payment collection, ensuring you receive your funds promptly. Additionally, Mangrove provides valuable business insights, offering a clear view of your financial health. With this data at your fingertips, you can make informed decisions to optimize your cash flow and grow your business.
        </p>
       
      </>
    ),
    badge: "Changelog",
    image:
    "/m2.png",
  },
 
];
