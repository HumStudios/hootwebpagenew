"use client";
import About from "@/components/about";
import Contact from "@/components/contact";

import Hero from "@/components/hero";
import Services from "@/components/services";
import Technoloigies from "@/components/technoloigies";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import { firebaseConfig } from '@/app/firebase/config';
import { initializeApp } from 'firebase/app';
import { FeaturesSection } from "@/components/featured";

export default function Home() {
  const app = initializeApp(firebaseConfig);
  return (
    <main className="relative bg-neutral-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems}/>
      <Hero/>
     <FeaturesSection/>
      <Services/>
      <Technoloigies/>
      <Contact/>
      <About/>
  
    </div>
  </main>
  );
}
