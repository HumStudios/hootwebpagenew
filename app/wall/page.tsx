"use client";
import React, { useEffect, useState } from "react";
import { ParallaxScroll } from "./ui/parellel-scroll";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/config";
import AppLoader from "@/components/ui/app-loader";
interface WallItem {
  image: string;
}
const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [wallimages, setImages] = useState<WallItem[]>([]);
  const [images, setImg] = useState<string[]>([]);
  const db = getFirestore();
  const app = initializeApp(firebaseConfig);
  useEffect(() => {
   
    const fetchData = async () => {
      setIsLoading(true);
      const collectionReference = collection(db, "wall");
      const q = query(collectionReference);
      const courseQuery = await getDocs(q);
      const fetcheditems: WallItem[] = [];
      courseQuery.forEach((doc) => {
        const data = doc.data() as WallItem;
        fetcheditems.push(data);
      });
      const img: string[] = [];
      fetcheditems.map((d) => {
        img.push(d.image);
      });
      setImg(img);
      setIsLoading(false);
    };
    if(images.length == 0){
      fetchData();
    }
    setIsLoading(false);
  }, []);
  return isLoading? (<AppLoader/>): (
    <div className="w-full h-full">
      <div className="">
        <h1 className="text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          The Wall
        </h1>
      </div>
      <ParallaxScroll images={images} />
    </div>
  );
};

export default Page;
