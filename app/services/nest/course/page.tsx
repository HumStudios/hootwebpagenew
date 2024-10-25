"use client"
import AppLoader from '@/components/ui/app-loader';
import { cloudFront, homeLink } from '@/data';
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import VideoCard from './ui/video-card';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/app/firebase/config';
import Link from 'next/link';
import ReactPlayer from 'react-player'
interface CourseItem {
  course: string,
  duration: string,
  episode: string,
  image: string,
  title: string,
  video: string,
  key: number,
}
const Page = () => {
  const app = initializeApp(firebaseConfig);
  const router = useRouter();
  const course = getCookie("course");
  const db = getFirestore();
  const [firestoreCourse, setFirestoreCourse] = useState<CourseItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [coursevideo, setVideo] = useState('');
  const handleTileClick = ({ video }: { video: string }) => {
    const videoLink = cloudFront + video;
    setVideo(
      videoLink
    );
    setIsPlaying(
      true
    );
  }
  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      const collectionReference = collection(db, "course");
      const q = query(collectionReference);
      const courseQuery = await getDocs(q);
      const fetchedCourses: CourseItem[] = [];
      courseQuery.forEach((doc) => {
        const data = doc.data() as CourseItem;
        fetchedCourses.push(data);
      });
      setFirestoreCourse(fetchedCourses);
      setIsLoading(false);
    }
    if (course) {
      fetchData();
      setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  return isLoading ? (<AppLoader />) : (
    <div className='w-full'>
      <div className='flex flex-col '>
        <div className="fixed top-0 left-10 mr-4">
          <a href={homeLink}>
            <Image src="/hoot.png" alt='Hoot' height={80} width={80} />
          </a>
        </div>
        <div className='flex flex-col items-center justify-center  mt-28 md:ml-28 ml-5'>
        {isPlaying && <div className='flex h-[18rem]  w-[25rem] md:w-[42rem] md:h-[25rem] relative'>
                    <ReactPlayer
       
       config={{ file: { 
        attributes: {
          controlsList: 'nodownload'
        }
      }}}
        url={coursevideo}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
                  </div>}
          <div className="grid md:grid-cols-6 grid-cols-2 relative gap-5 mt-24 md:mt-0" > {/* Apply grid styles */}
            {
              firestoreCourse.map(({ course, duration, episode, image, title, video, key }) => (

                <div>

              

                  <div onClick={() => handleTileClick({ video: video })}>
                    <VideoCard course={course} duration={duration} episode={episode} image={image} key={key} title={title} />
                  </div>
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