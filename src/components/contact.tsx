"use client";

import { IoMailOutline } from "react-icons/io5";

const handleEmail = () => {
    window.open("mailto:bensonfmanzano@gmail.com?subject=Let's Connect!");
}

export default function Contact() {
  return (
    <>
      <div className="flex flex-col max-w-full h-full justify-center items-center gap-7">
        <p className="text-4xl"> <span className="underline underline-offset-8">let&apos;s</span> connect!</p>
        <IoMailOutline className="w-10 h-12 hover:cursor-pointer hover:animate-pulse" onClick={handleEmail}/>
      </div>

    </>
  );
}
