import React from 'react'
import Image from 'next/image'
const VideoCard = ({ course, title, episode, duration, image,key }: { course: string; title: string; episode: string; duration: string; image: string;key:number }) => {
    return (
        <div className=" relative h-60 w-48 bg-neutral-900 rounded-xl border border-gray-500 flex flex-col items-start justify-start"> {/* Card 1 */}
            <h1 className='text-xl text-bold p-2'>{course}</h1>
            <Image className='mt-5 ' src={image} alt="Thumbnail" height={1000} width={1000} />
            <div className='p-2'>

                <p className='text-xs text-gray-500'>
                    Episode <span className='text-xs text-blue-500'>{episode}</span>
                </p>
                <p className='text-xs text-gray-500'>
                    {duration}
                </p>
                <p>
                    {title}
                </p>
            </div>
        </div>
    )
}

export default VideoCard