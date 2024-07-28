"use client";

import React, { useState, useEffect } from "react";

const handleLowerPage = () => {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
};

const handleContact = () => {
  window.scrollTo({
    top: 2000,
    behavior: "smooth",
  });
};


export default function Navbar() {
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

  const handleGithub = () => {
    window.open("https://github.com/benson-fm/portfolio", "_blank");
  };

  return (
    <nav className="flex w-full h-[40px] justify-center text-white ">
      <div className="flex flex-row w-3/4 justify-between pt-10 tracking-wide">
        {isSmallScreen ? <a onClick={handleGithub}>@</a> : <a onClick={handleGithub}>@bensonfm</a>}
        <div className="flex space-x-10">
          <button
            className="hover:underline hover:underline-offset-8"
            onClick={handleLowerPage}
          >
            portfolio
          </button>
          <button className="hover:underline hover:underline-offset-8" onClick={handleContact}>
            contact
          </button>
        </div>
      </div>
    </nav>
  );
}
