"use client";
import React from 'react';
import { MotionDiv } from '@/app/framer-motio';
import Image from 'next/image';

const AdminLoader = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <MotionDiv
                animate={{ rotate: 360 }} // Apply rotation animation
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }} // Infinite loop with smooth rotation
                className="w-16 h-16 flex items-center justify-center"
            >
                {/* Replace this with your company logo */}
                <Image src="/logo.png" alt="Logo" className="h-16" height={100} width={100} />
            </MotionDiv>
        </div>
    );
};

export default AdminLoader;
