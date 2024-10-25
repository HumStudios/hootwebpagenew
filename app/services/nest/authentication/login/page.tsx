"use client"
import React, { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { homeLink, nest } from '@/data';
import Image from 'next/image';
import { signInWithEmailAndPassword, } from 'firebase/auth';
import { authFirebase } from '@/app/firebase/config';
import AppLoader from '@/components/ui/app-loader';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation';


const Page = () => {
  const [user] = useAuthState(authFirebase);
  const router = useRouter();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [isLoading,setisLoading] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    useEffect(()=>{
      if(user){
          setisLoading(true);
        router.push(nest[3].link)
      } 
    },[]);
    const handleSubmit = () => {
      const emptyFields = [];
      if (!email.trim()) {
        emptyFields.push('Email');
      }
      if (!password.trim()) {
        emptyFields.push('Password');
      }
      if (emptyFields.length > 0) {
        const errorMessage = `Please fill the  fields to continue`;
        setError(errorMessage);
        return;
      }
      if(!emailRegex.test(email)){
        const errorMessage = `Invalid Email`;
        setError(errorMessage);
        return;
      }
      loginUser();
      };

      const loginUser = async()=>{
        try {
          setisLoading(true);
          signInWithEmailAndPassword(authFirebase, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
           if(user){
            router.push(nest[3].link)
           }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setisLoading(false); 
            setError(errorMessage);
          });
        } catch (error) {
          
        }
      }
  return isLoading? (
    <AppLoader/>
  ): (
    
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  bg-neutral-950 mt-32">
        <div className="fixed top-0 left-10 mr-4">
        <a href={homeLink}>
           <Image src="/hoot.png" alt='Hoot' height={80} width={80} />
       </a>
                </div>
      <h1 className='text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mt-10'>
      Welcome to Nest
        </h1>
        {error && (
        <div className="text-red-500 font-bold text-center mb-4">{error}</div>
      )} 

  
      
      <LabelInputContainer className="mb-4 mt-5">
        <Label htmlFor="email">Email Address</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="example@email.com" type="email" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Password</Label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="••••••••" type="password" />
      </LabelInputContainer>
     

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      onClick={handleSubmit}
      >
        Login &rarr;
        <BottomGradient />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-hoot  to-transparent my-8 h-[1px] w-full" />

      <div className="flex flex-col space-y-4">
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center" >
      Dont have an account yet?
    </p>
    <Link href={nest[2].link}>
    <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
     
      >
        Register &rarr;
        <BottomGradient />
      </button>
    </Link>
      </div>
   
  </div>
  )
}

export default Page
const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };