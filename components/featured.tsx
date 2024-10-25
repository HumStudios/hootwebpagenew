
import React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { ImagesSlider } from "./ui/image-slider";
import { CardStack,  } from "./ui/card-stack";

export function FeaturesSection() {
  const features = [
    {
      title: "Project Mangrove",
      description:
        "Stay on top of finances with Mangrove. Our innovative billing software simplifies invoice creation, automates payments, and provides valuable business insights. Currently under development.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Our Guiding Principles",
      description:
        "",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Watch us on youtube",
      description:
      "Curious about Hum Studios and our products? Check out our new YouTube channel for behind-the-scenes looks, product demos, and more.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "We're Always On, Always Humming!",
      description:
        "Our team at Hum Studios is always on, always humming with creativity and energy. We're committed to providing top-notch service 24/7.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
<section id="featured">
<div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        Innovative Solutions from Hum Studios
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        Discover a world of possibilities with Hum Studios. We specialize in cutting-edge software development, creative design solutions, or"expert consulting. Our team of skilled professionals is dedicated to delivering exceptional results that exceed your expectations.
   
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
</section>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  const images = [
    "/man (1).png",
    "/man (2).png",
    "/man (3).png",
    "/man (4).png",
    "/man (5).png",
  ];
  return (
    <ImagesSlider className="h-[25rem] w-full" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      
      </motion.div>
    </ImagesSlider>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://youtube.com/@humstudios_in?si=cS99iPTFnb-J0msh"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <Image
            src="hum.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
 
  return (
  
  
    <div className="h-[25rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>


  );
};
const CARDS = [
  {
    id: 0,
    name: "Nelson Mandela",
    designation: "Former President of South Africa",
    content: (
      <p>
       it always seems impossible <br />
      until it's done
      </p>
    ),
  },
  {
    id: 1,
    name: "Steve Jobs",
    designation: "",
    content: (
      <p>
       Stay Hungry. <br /> Stay Foolish
      </p>
    ),
  },
  {
    id: 2,
    name: "President Theodore Roosevelt",
    designation: "Former President of United States",
    content: (
      <p>
     Comparison is the thief of joy
      </p>
    ),
  },
  {
    id: 3,
    name: "Unknown",
    designation: "",
    content: (
      <p>
      Memento <br />
      Mori
      </p>
    ),
  },
  {
    id: 4,
    name: "Monkey D Luffy",
    designation: "",
    content: (
      <p>
      No matter how hard or impossible it is <br />
      never lose sight of your goal
      </p>
    ),
  },

  
];
export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [8.7722810, 76.8810512], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};








// "use client"
// import { featured } from '@/data'
// import React, { useEffect, useState } from 'react'

// import Link from 'next/link';
// import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
// import Image from 'next/image';
// import { BackgroundBeams } from './ui/BackgroundBeams';
// import { DirectionAwareHover } from './ui/directional-card';
// // Replace with your Firebase configuration path
// interface FeaturedItem {
//   key: number;
//   heading: string;
//   image: string;
//   link: string;
//   subHeading?: string; // Optional subHeading property
// }

// const Featured = () => {
//   const [firestoreFeatured, setFirestoreFeatured] = useState<FeaturedItem[]>([]);

//   // Fetch data from Firestore on component mount
//   useEffect(() => {
//     const fetchFeaturedData = async () => {
//       try {

//         const db = getFirestore();
//         const featuredCollection = collection(db, 'featured');
//         const q = query(featuredCollection); // Optional: Add query filters if needed

//         const querySnapshot = await getDocs(q);
//         const fetchedFeatured: FeaturedItem[] = [];

//         querySnapshot.forEach((doc) => {
//           const data = doc.data() as FeaturedItem;
//           fetchedFeatured.push(data);
//         });

//         setFirestoreFeatured(fetchedFeatured);
//       } catch (error) {
//         console.error('Error fetching featured data:', error);
//         // Handle errors gracefully (e.g., display an error message)
//       }
//     };

//     fetchFeaturedData();
//   }, []);
//   return (
//     <section className="w-full relative h-auto flex flex-col items-center justify-center" id='featured'>
//       <div className='md:py-36 py-32 '>
//         <BackgroundBeams />
//         <h1 className='text-2xl md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold'>
//           Featured

//         </h1>
//         {
//           firestoreFeatured.map(({ key, heading, image, link, subHeading }) => (
//             <div className='w-full relative mt-10'>

//               <Link href={link}>
//                 <DirectionAwareHover imageUrl={image}>
//                   <h1 className='font-semibold text-4xl md:text-6xl text-center  text-white font-sans py-5'>

//                     {heading}
//                   </h1>
//                   <p className="font-normal text-sm">{subHeading}</p>
//                 </DirectionAwareHover>


//               </Link>
//             </div>

//           ))
//         }
//       </div>
//     </section>
//   )
// }

// export default Featured