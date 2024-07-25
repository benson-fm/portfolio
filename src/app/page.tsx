import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <main className="scroll-smooth bg-gradient-to-b from-gray-900 to-gray-600 min-h-dvh text-white">
      <div className="flex flex-col min-h-dvh gap-80">
        <Navbar />
        <Hero />
      </div>
      <div className="flex flex-col min-h-dvh">
        <Portfolio />
      </div>
    </main>
  );
}
