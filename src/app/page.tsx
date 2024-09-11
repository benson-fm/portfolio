'use client'; 
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import React, { useRef } from 'react';
import { Reveal } from "@/lib/Reveal";

export default function Home() {
  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    window.scrollTo({
      top: portfolioRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <main className="scroll-smooth bg-gradient-to-b from-gray-900 to-gray-600 min-h-dvh text-white overflow-x-hidden">
      <div className="flex flex-col h-dvh gap-40 md:gap-40 2xl:gap-48 3xl:gap-60 items-center justify-center">
        <Navbar />
        <Hero scrollToPortfolio={scrollToPortfolio}/>
      </div>
      <div className="flex flex-col min-h-dvh">
        <Portfolio ref={portfolioRef}/>
      </div>
      <div className="flex flex-col min-h-96 justify-center">
        <Contact />
      </div>
    </main>
  );
}
