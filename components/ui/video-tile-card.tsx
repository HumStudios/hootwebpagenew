"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function VideoTileCard({ image, name,key,price,}: { image: string; name: string; key:number; price?:string;}) {
    return (
        <div className="max-w-xs w-full group/card">
            <div
                className={cn(
                    "md:w-80 cursor-pointer overflow-hidden relative card md:h-96 h-64 w-52 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between border border-neutral-700 ",
                )}
            >
                <Image className=" absolute " src={image} alt="image" height={1000} width={1000}></Image>
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/70"></div>
                <div className="flex flex-row items-center space-x-4 z-10 p-2">
                    <Image
                        height="100"
                        width="100"
                        alt="Avatar"
                        src="/hoot.png"
                        className="h-10 w-10 rounded-full border-2 object-cover "
                    />
                  
                </div>
                <div className="text content p-2">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {name}
                    </h1>
                    <h1 className="font-bold text-xl md:text-2xl text-hoot relative z-10">
                        {price}
                    </h1>
                 
                </div>
            </div>
        </div>
    );
}
