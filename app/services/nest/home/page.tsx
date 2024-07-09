'use client'
import React from 'react'
import Image from 'next/image'
import ShimmerButton from '@/components/ui/ShimmerButton'
import { signOut } from 'firebase/auth'
import { authFirebase } from '@/app/firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
const Page = () => {
    const [user] = useAuthState(authFirebase);
    const router = useRouter();
    const logout = ()=>{
        signOut(authFirebase)
        router.push('/services/nest');
    }
    return (
        <div className='w-full h-full'>
            <div className='items-center justify-center flex flex-col'>
                <div className="fixed top-0 left-10 mr-4">
                    <Image src="/hoot.png" alt='Hoot' height={80} width={80} />
                </div>
                <div className="fixed top-0 right-10 ml-4 mt-6 md:mt-5">
                    <button className='font-bold rounded-2xl text-neutral-950 w-20 md:w-32 h-7 md:h-10 bg-hoot' onClick={logout}>
                        LOG OUT
                    </button>
                </div>
                <h1 className='text-7xl mt-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold '>
        Coming Soon
      </h1>
                <Image className='mt-20 rounded-2xl border border-hoot' src="/course.png" alt='Course' height="1000" width="1000"/>
            </div>
        </div>
    )
}

export default Page