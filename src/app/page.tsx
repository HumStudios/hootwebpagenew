"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Topbar from "./components/Topbar";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis"
import About from "./components/About";
import Feature from "./components/Feature";
import WhyChooseUs from "./components/Why";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (

    <div>
      <Topbar />
      <div className="px-5">

        <ReactLenis root >
          <Hero />
          <About />
          <Feature />
          <WhyChooseUs />
          <Technologies/>
          <Contact />

        </ReactLenis>
      </div>
      <Footer />
    </div>

  );
}
