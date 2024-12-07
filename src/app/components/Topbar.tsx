"use client";

import { logo } from '@/data/images';
import Image from 'next/image';
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import Sidebar from './Sidebar'; // Import the Sidebar component

const Topbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  return (
    <header
      className="fixed top-0 left-0 w-full bg-background z-50 " // Added z-50 for higher stacking order

    >

      <div className="flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <div className="flex flex-col">
            <span className="ml-3 text-xl font-bold">Hum</span>
            <span className="ml-3 text-xs font-bold">Studios</span>
          </div>
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex flex-row gap-5">
          <Link
            to="about"
            smooth={true}
            duration={800}
            className="ml-3 text-xl font-extralight cursor-pointer"
          >
            About
          </Link>

          <Link
            to="featured"
            smooth={true}
            duration={800}
            className="ml-3 text-xl font-extralight cursor-pointer"
          >
            Featured
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="ml-3 text-xl font-extralight cursor-pointer"
          >
            Contact
          </Link>

        </div>

        {/* Menu Button for Small Screens */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsSidebarOpen(true)} // Open the sidebar
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Topbar;
