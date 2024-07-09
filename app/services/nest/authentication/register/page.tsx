"use client"
import { useState } from 'react';
import React from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { authFirebase } from '@/app/firebase/config';

import { nest } from '@/data';

import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import AppLoader from '@/components/ui/app-loader';
import Image from 'next/image';
const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFName] = useState('');
  const [seccondName, setSName] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!.@#$%^&*()_+-={}\[\]|\\:;'"<,>.?\/]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleSubmit =  () => {
    setIsError("");

    const emptyFields = [];
    if (!email.trim()) {
      emptyFields.push('Email');
    }
    if (!password.trim()) {
      emptyFields.push('Password');
    }
    if (!confirmPassword.trim()) {
      emptyFields.push('Confirm Password');
    }
    if (!firstName.trim()) {
      emptyFields.push('First Name');
    }
    if (!seccondName.trim()) {
      emptyFields.push('Last Name');
    }
    if (!phone.trim()) {
      emptyFields.push('Phone');
    }
    if (emptyFields.length > 0) {
      const errorMessage = `Please fill the  fields to continue`;
      setIsError(errorMessage);
      return;
    }

    if(!emailRegex.test(email)){
      setIsError("Invalid email!");
      setEmail('');
      return;
    }
    if(password !== confirmPassword){
    setIsError("Password did not match!");
    setPassword('');
    setConfirmPassword('');
      return;
    }
    if(!passwordRegex.test(password)){
      setIsError("Password must be at least 8 characters long and contain a mix of uppercase and lowercase letters, numbers, and special characters.");
      setPassword('');
    setConfirmPassword('');
      return;
    }

   createUser();
  };
  const createUser = async ()=>{
    try {
      setIsLoading(true);
      createUserWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
         if(user){
          registerUser();
         }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsLoading(false);
          setIsError(errorMessage);
          
        });
    

    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert(error);
    }
  }
  const registerUser =async ()=>{
    const db = getFirestore();
      const userRef = doc(db, 'users', email);
      const userData = {
        firstName: firstName,
        lastName: seccondName,
        phone: phone,
        email: email
      }
      await setDoc(userRef, userData);
      setIsLoading(false)
      router.push(nest[1].link);
      
  }
  return isLoading?(
  <AppLoader/>
  ): (
    
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-neutral-950">
     
     <div className="fixed top-0 left-10 mr-4">
                <Image src="/hoot.png" alt='Hoot' height={80} width={80}/>
                </div>
      <h1 className='text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mt-10'>
        New to Nest?
      </h1>
      {isError && (
        <div className="text-red-500 font-bold text-center mb-4">{isError}</div>
      )} 
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
      Let's create an account for you!
      </p>


      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 mt-5">
        <LabelInputContainer>
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" placeholder="First Name" type="text" required value={firstName} onChange={(e) => setFName(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" placeholder="Second Name" type="text" value={seccondName} onChange={(e) => setSName(e.target.value)} />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" placeholder="XXXXXXXXXXX" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="example@email.com" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Password <span className='text-xs'> </span></Label>
        <Input id="password" placeholder="••••••••" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Confirm password</Label>
        <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" placeholder="••••••••" type="password" required />
      </LabelInputContainer>

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
       onClick={handleSubmit}
      >
        Register &rarr;
        <BottomGradient />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-hoot to-transparent mt-5 h-[1px] w-full" />

      <div className="flex flex-col space-y-4">
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center" >
         Already have an account?
        </p>
        <Link href={nest[1].link}>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mb-10"
            
          >
            Login &rarr;
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