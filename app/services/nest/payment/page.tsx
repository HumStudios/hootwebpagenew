"use client";
import React, { useEffect, useState } from 'react';
import {setCookie, getCookie } from 'cookies-next';
import Image from "next/image";
import { VideoTileCard } from '@/components/ui/video-tile-card';
import { BackgroundGradient } from '@/components/ui/gradient-card';
import { collection, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { authFirebase } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { homeLink, nest } from '@/data';
import AppLoader from '@/components/ui/app-loader';


interface CourseData{
  name:string,
  description:[],
  image:string,
  subscription_key:string,
  key:number,
  price:string,
  id:string,
}

const Page = () => {
  const router = useRouter();
    const course = getCookie("course");
    const [isLoading, setIsLoading] = useState(false);
    const [courseData, setCourseData] = useState<CourseData >({ // Initialize with default values
      name: '',
      description: [],
      image: '',
      subscription_key: '',
      key: 0,
      price:'',
      id:""
    });
  ; // Initialize with null

  useEffect(()=>{
    setIsLoading(true);
   
    const fetchData=async ()=>{
      const db = getFirestore();
      const featuredCollection = collection(db, 'courses');
      const q = query(featuredCollection,where("id","==",course)); 
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.warn('User document not found for email:', course);
        setIsLoading(false); // Reset loading state after handling no user case
        return; // Or handle the case where no user is found
      }
      const courseDoc = querySnapshot.docs[0]; // Access the first document
      const courseData = courseDoc.exists() ? courseDoc.data() : {};
      setCourseData(courseData as CourseData);
      setIsLoading(false);
    }
    if(course){
      fetchData();
    }
    setIsLoading(false);
  },[])
  const handleClick =async()=>{
    setIsLoading(true);
    const db = getFirestore();

    const email = authFirebase.currentUser?.email;
    const collectionReference = collection(db, "users");
    const q = query(collectionReference, where('email', '==', email)); // Optional: Add query filters if needed
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.warn('User document not found for email:', email);
      setIsLoading(false); // Reset loading state after handling no user case
      return; // Or handle the case where no user is found
    }
    const userDoc = querySnapshot.docs[0]; // Access the first document
    const userData = userDoc.exists() ? userDoc.data() : {}; // Handle non-existent user
   await updateDoc(userDoc.ref,{
    subscription:[courseData.subscription_key]
   });
   const checkQuerry = await getDocs(q);
   const checkUserDoc = checkQuerry.docs[0]; 
   const checkUserData = checkUserDoc.exists() ? checkUserDoc.data() : {};
   const subscriptions = checkUserData?.subscription;
   const hasSubKey = subscriptions.includes(courseData.subscription_key);
   if(hasSubKey){
    setCookie("course",courseData.subscription_key);
   router.push(nest[4].link);
   }
   setIsLoading(false);
   

    // Check if the subKey exists within the subscriptions array
   
  } 
    return isLoading?(<AppLoader/>): (
        <div className='w-full'>
          <div className='flex flex-col'>
        <div className="fixed top-0 left-10 mr-4">
        <a href={homeLink}>
           <Image src="/hoot.png" alt='Hoot' height={80} width={80} />
       </a>
        </div>
        <div className='flex flex-col items-start justify-start  mt-28 md:ml-28 ml-5'>
          <h1 className='text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold '>
            1.Check Your Order
          </h1>
        <div className='mt-5 border border-green-600 '>
        <VideoTileCard image={courseData.image} key={courseData.key} name={courseData.name} price={courseData.price}/>
        </div>
        <h1 className='mb-5 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mt-5'>
            2.Select payment
          </h1>
          <ShimmerButton position='left' title='Confirm' handleClick={handleClick}/>
          </div>
        </div>


        </div>
    )
}

export default Page