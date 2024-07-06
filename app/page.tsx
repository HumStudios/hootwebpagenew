"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Technoloigies from "@/components/technoloigies";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-neutral-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems}/>
      <Hero/>
      <Services/>
      <Technoloigies/>
      <Contact/>
      <About/>
  
    </div>
  </main>
  );
}
