"use client";

import React, { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { Reveal } from "@/lib/Reveal";

const handleGithub = () => {
  window.open("https://github.com/benson-fm");
};

const handleLinkedIn = () => {
  window.open("https://www.linkedin.com/in/benson-manzano/");
};

const handleResume = () => {
  window.open(
    "https://drive.google.com/file/d/1kwYjzCQ_DC3Z_Q2ItmRjNaoqBHgWKRhJ/view?usp=sharing"
  );
};

const handleLowerPage = () => {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
};

interface HeroProps {
  scrollToPortfolio: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToPortfolio }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // You can set the width threshold as needed
    };

    handleResize(); // Set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <Reveal>
      <div className="flex flex-col items-center justify-center text-white max-h-dvh">
        <h1 className="text-6xl md:text-7xl xl:text-9xl font-bold pb-5">
          {isSmallScreen ? "Benson M": "Benson Manzano"}
        </h1>
        <h2 className="text-lg md:text-2xl pb-10">
          Fullstack Developer | CS @ UCI
        </h2>
        <div className="flex flex-row gap-11 text-2xl w-[500px] h-[50px] justify-center align-center items-center pb-14 lg:pb-36">
          <IoLogoGithub
            className="w-8 h-9 md:w-10 md:h-12 hover:cursor-pointer hover:animate-pulse"
            onClick={handleGithub}
          />
          <FaLinkedinIn
            className="w-8 h-9 md:w-10 md:h-10 hover:cursor-pointer hover:animate-pulse"
            onClick={handleLinkedIn}
          />
          <HiDocumentText
            className="w-8 h-9 md:w-10 md:h-12 hover:cursor-pointer hover:animate-pulse"
            onClick={handleResume}
          />
        </div>
        <HiChevronDown
          className="w-6 h-5 lg:w-10 lg:h-12 animate-bounce hover:cursor-pointer"
          onClick={scrollToPortfolio}
        />
      </div>
    </Reveal>
  );
};

export default Hero;
