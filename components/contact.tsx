import { contact_us, contactDetails } from '@/data'
import React from 'react'

const Contact = () => {
    const sendMail =  () => {
    
        console.log("rtes");
        window.location.href = "mailto:humstudios.in@gmail.com"
    }
    return (
        <section className="w-full relative" id='contact'>
            <div className='flex py-10 bg-neutral-900 rounded-xl  border-white/[0.2] border w-auto'>
            <div className='flex flex-col h-80 px-10 gap-2 '>
                <h1 className='text-2xl md:text-4xl text-left bg-clip-text  text-hoot font-sans font-bold'>CONTACT US</h1>
                <p className='text-left md:py-5 text-xs md:text-base lg:text-base text-gray-200'>{contact_us}</p>
               
                <div className='rounded-2xl  w-64  md:w-80 bg-neutral-950  flex-row items-center py-2 px-2'>
                    <span className='text-left py-5  md:text-base lg:text-base text-xs text-gray-200'>Phone : {contactDetails[0].data}</span>

                    </div>  
                    <div className='rounded-2xl  w-64  md:w-80 bg-neutral-950  flex-row items-center py-2 px-2'>
                    <span className='text-left text-xs md:text-base lg:text-base text-gray-200'>Email : {contactDetails[1].data}</span>

                    </div>
                    
                <form className='md:py-5 py-2'>
                <button formAction={sendMail} className=' bg-hoot md:px-20 md:py-2 px-5 rounded-2xl  w-64 md:w-80 py-1 '>Contact us!</button>
                </form>
            </div>
            
            </div>
        </section>
    )
}

export default Contact