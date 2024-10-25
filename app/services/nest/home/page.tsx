'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { signOut } from 'firebase/auth'
import { authFirebase } from '@/app/firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import { VideoTileCard } from '@/components/ui/video-tile-card'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import AppLoader from '@/components/ui/app-loader'
import { homeLink, nest } from '@/data'
import { setCookie } from 'cookies-next';
interface CourseItem {
  id: string;
  key: number;
  name: string;
  image: string;
  price: string;
  description: string[];
  subscription_key: string; // Optional subHeading property
}

const Page = () => {
  const [firestoreFeatured, setFirestoreFeatured] = useState<CourseItem[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const videoTileClick = async ({ subKey, id }: { subKey: string, id: string }) => {
      
    try {
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
      const subscriptions = userData?.subscription; // Avoid potential errors
      if (!subscriptions || !Array.isArray(subscriptions)) {
        console.warn('User document does not have a valid "subscription" array.');
        setIsLoading(false); // Reset loading state after handling missing array
        return; // Or handle the case where the array is missing or not an array
      }

      // Check if the subKey exists within the subscriptions array
      const hasSubKey = subscriptions.includes(subKey);

      if (hasSubKey) {
        setCookie("course",id);
        router.push(nest[4].link);
      }
      if (!hasSubKey) {
        setCookie("course",id);
        router.push(nest[5].link);
      }
      console.log(`User has subKey "${subKey}":`, hasSubKey);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching featured data:', error);
    }
  }
  const [user] = useAuthState(authFirebase);
  const router = useRouter();
  const logout = () => {
    signOut(authFirebase);
    router.push('/services/nest');
  }

  // Fetch data from Firestore on component mount
  useEffect(() => {
    const fetchFeaturedData = async () => {
      setIsLoading(true);
      try {

        const db = getFirestore();
        const featuredCollection = collection(db, 'courses');
        const q = query(featuredCollection); // Optional: Add query filters if needed

        const querySnapshot = await getDocs(q);
        const fetchedFeatured: CourseItem[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data() as CourseItem;
          fetchedFeatured.push(data);
        });

        setFirestoreFeatured(fetchedFeatured);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching featured data:', error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchFeaturedData();
  }, []);


  return isLoading ? (<AppLoader />) : (
    <div className='w-full h-full'>
      <div className='flex flex-col'>
        <div className="fixed top-0 left-10 mr-4">
       <a href={homeLink}>
           <Image src="/hoot.png" alt='Hoot' height={80} width={80} />
       </a>
        </div>
        <div className="fixed top-0 right-10 ml-4 mt-6 md:mt-5">
          <button className='font-bold rounded-2xl text-neutral-950 w-20 md:w-32 h-7 md:h-10 bg-hoot' onClick={logout}>
            LOG OUT
          </button>
        </div>
        <div className='flex flex-col items-start justify-start  mt-28 md:ml-28 ml-5'>
          <h1 className='text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold '>
            Courses
          </h1>

          <div className='mt-10 flex md:flex-row flex-col'>

            {
              firestoreFeatured.map(({ description, image, key, name, price, subscription_key, id }) => (
                <div onClick={() => videoTileClick({ subKey: subscription_key, id: id })}>
                  <VideoTileCard key={key} image={image} name={name} />
                </div>

              ))
            }

          </div>
        </div>

      </div>
    </div>
  )
}

export default Page