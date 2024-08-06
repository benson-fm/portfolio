'use client'; 
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import { Reveal } from "@/lib/Reveal";

export default function Home() {
  return (
    <main className="scroll-smooth bg-gradient-to-b from-gray-900 to-gray-600 min-h-dvh text-white overflow-x-hidden">
      <div className="flex flex-col min-h-dvh gap-48 2xl:gap-60 3xl:gap-72 items-center">
        <Navbar />
        <Hero />
      </div>
      <div className="flex flex-col min-h-dvh">
        <Portfolio />
      </div>
      <div className="flex flex-col min-h-96 justify-center">
        <Contact />
      </div>
    </main>
  );
}
