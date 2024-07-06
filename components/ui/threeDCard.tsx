"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3DCard"


export function ThreeDCard({ title, img1, imgClassName, key }: {
    title: string,

    img1?: string,

    imgClassName: string,
    key: number
}) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="lg:w-36 bg-neutral-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-accend dark:border-white/[0.2] border-black/[0.1] w-auto md:w-32 sm:w-24 h-auto rounded-xl p-6 border lg:gap-2 ">
                <CardItem
                    translateZ="50"
                    className="lg:text-xl text-sm font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>

                <CardItem translateZ="100"
                    rotateX={20}
                    rotateZ={-10} className="w-8 lg:w-20 ">
                    <img src={img1} alt="" />
                </CardItem>



            </CardBody>
        </CardContainer>
    );
}
