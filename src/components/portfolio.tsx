import React, { forwardRef } from "react";
import Project from "./project";
import Petr from "../assets/petrCalednar.jpg";
import Fusion from "../assets/fusion.svg";
import stock from "../assets/stock_sentiment_logo.svg";
import { Reveal } from "@/lib/Reveal";

interface PortfolioProps {
  // Define any additional props if needed
}

const Portfolio = forwardRef<HTMLDivElement, PortfolioProps>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-white">
      <Reveal>
        <h1 className="text-6xl font-bold pt-24">Portfolio</h1>
      </Reveal>
      <div className="flex flex-col gap-10 pt-10">
        <Reveal>
          <Project
            title="StockWise"
            description="AI-Driven sentiment analysis on stocks powered by Google Gemini"
            image={stock}
            link="https://github.com/benson-fm/stockwise/"
            color="#111827"
          />
        </Reveal>
        <Reveal>
          <Project
            title="PetrCalendar"
            description="Streamlining online scheduling for UCI Petr Runs"
            image={Petr}
            link="https://github.com/benson-fm/PetrCalendar"
            color="black"
          />
        </Reveal>
        <Reveal>
          <Project
            title="FUSION Website"
            description="The Official Website of Filipino Undergraduates in Science and Technology in an Organized Network (FUSION)"
            image={Fusion}
            link="https://github.com/benson-fm/FUSION-Website"
            color="white"
          />
        </Reveal>
      </div>
    </div>
  );
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;
