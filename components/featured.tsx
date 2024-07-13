"use client"
import { featured } from '@/data'
import React, { useEffect, useState } from 'react'

import Link from 'next/link';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import Image from 'next/image';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { DirectionAwareHover } from './ui/directional-card';
// Replace with your Firebase configuration path
interface FeaturedItem {
  key: number;
  heading: string;
  image: string;
  link: string;
  subHeading?: string; // Optional subHeading property
}

const Featured = () => {
  const [firestoreFeatured, setFirestoreFeatured] = useState<FeaturedItem[]>([]);

  // Fetch data from Firestore on component mount
  useEffect(() => {
    const fetchFeaturedData = async () => {
      try {

        const db = getFirestore();
        const featuredCollection = collection(db, 'featured');
        const q = query(featuredCollection); // Optional: Add query filters if needed

        const querySnapshot = await getDocs(q);
        const fetchedFeatured: FeaturedItem[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data() as FeaturedItem;
          fetchedFeatured.push(data);
        });

        setFirestoreFeatured(fetchedFeatured);
      } catch (error) {
        console.error('Error fetching featured data:', error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchFeaturedData();
  }, []);
  return (
    <section className="w-full relative h-auto flex flex-col items-center justify-center" id='featured'>
      <div className='md:py-36 py-32 '>
        <BackgroundBeams />
        <h1 className='text-2xl md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold'>
          Featured

        </h1>
        {
          firestoreFeatured.map(({ key, heading, image, link, subHeading }) => (
            <div className='w-full relative mt-10'>

              <Link href={link}>
                <DirectionAwareHover imageUrl={image}>
                  <h1 className='font-semibold text-4xl md:text-6xl text-center  text-white font-sans py-5'>

                    {heading}
                  </h1>
                  <p className="font-normal text-sm">{subHeading}</p>
                </DirectionAwareHover>


              </Link>
            </div>

          ))
        }
      </div>
    </section>
  )
}

export default Featured