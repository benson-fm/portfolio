"use client";

import Project from "./project";
import Petr from "../assets/petrCalednar.jpg";
import Fusion from "../assets/fusion.svg";

export default function Portfolio() {
  return (
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold pt-24">Portfolio</h1>
        <div className="flex flex-col gap-10 pt-10">
          <Project
            title="PetrCalendar"
            description="Streamlining online scheduling for UCI Petr Runs"
            image={Petr}
            link="https://github.com/benson-fm/PetrCalendar"
            color="black"
          />
          <Project
            title="FUSION Website"
            description="The Official Website of Filipino Undergraduates in Science and Technology in an Organized Network (FUSION)" 
            image={Fusion}
            link="https://github.com/benson-fm/FUSION-Website"
            color="white"
          />
        </div>
      </div>
  );
}
