import React from 'react'
import Image from 'next/image'
const AppLoader = () => {
  return (
    <div className="flex fixed right-0 left-0 items-center justify-center h-full flex-col">
  
    <div className="animate-bounce mr-2">
        <Image src={'/hoot-icon.png'} alt='hoot' width={200} height={200}/>
    </div>
  </div>
  )
}

export default AppLoader