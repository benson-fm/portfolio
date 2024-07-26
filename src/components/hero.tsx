"use client";

import React from "react";
import { HiChevronDown } from "react-icons/hi2";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const handleGithub = () => {
  window.open("https://github.com/benson-fm");
}

const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/benson-manzano/");
}

const handleResume = () => {
    window.open("https://drive.google.com/file/d/1O8rngUofoRyGrXw2YxkAlAX3q9dfIY7a/view?usp=sharing");
}

const handleLowerPage = () => {
    window.scrollTo({
        top: 1000,
        behavior: 'smooth'
      });
}

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold pb-5">Benson Manzano</h1>
      <h2 className="text-2xl pb-10">Fullstack Developer | CS @ UCI</h2>
      <div className="flex flex-row gap-11 text-2xl w-[500px] h-[50px] justify-center align-center items-center pb-14 lg:pb-36">
        <IoLogoGithub className="w-10 h-12 hover:cursor-pointer hover:animate-pulse" onClick={handleGithub}/>
        <FaLinkedinIn className="w-10 h-10 hover:cursor-pointer hover:animate-pulse" onClick={handleLinkedIn}/>
        <HiDocumentText className="w-10 h-12 hover:cursor-pointer hover:animate-pulse" onClick={handleResume}/>
      </div>
      <HiChevronDown  className="w-6 h-5 lg:w-10 lg:h-12 animate-bounce hover:cursor-pointer" onClick={handleLowerPage}/>
    </div>
  );
}

export default Hero;