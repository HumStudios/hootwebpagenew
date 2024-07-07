"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3DCard"
import Link from "next/link";

export function SerivceThreeDCard({ image, title, des ,link}: { image: string; title: string; des: string; link:string}) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-900 dark:border-white/[0.2] border-black/[0.1] w-[20rem] md:w-[20rem] sm:w-[30rem] h-[25rem] rounded-xl p-6 border ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={image}
                        height="500"
                        width="500"
                        className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center py-5">
          
          <CardItem
            translateZ={20}
          
            className="px-8 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
           <Link
           href={link}>
            Explore
           </Link>
          </CardItem>
        </div>
            </CardBody>
        </CardContainer>
    );
}
