import { ImageProps, StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const popUpVariants = {
  open: { opacity: 1, y: "0%" },
  closed: { opacity: 0, y: "20%" },
};
const menuItemVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

interface ProjectProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  color: string;
}
{
  /* {isHover && (
        <div className="flex flex-col items-center justify-center z-20 w-[45vw] h-[60vh] max-h-[750px] max-w-[1000px] min-h-[200px] min-w-[300px] rounded-xl">
          hi
        </div>
      )} */
}
const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  link,
  color,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={` relative w-[45vw] h-[50vh] grid grid-cols-1 grid-rows-1 rounded-xl justify-center justify-items-center items-center overflow-hidden`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ backgroundColor: color }}
    >
      <Image src={image} alt={title} className={`w-[300px] ${isHover ? 'blur-sm' : 'filter-none' }`} />
      
      <motion.div
        animate={isHover ? "open" : "closed"}
        variants={popUpVariants}
        className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-xl text-white gap-2`}
        onClick={() => window.open(link, "_blank")}
      >
        <h3 className="text-3xl tracking-wide md:text-5xl font-bold">{title}</h3>
        <p className={`text-md w-[25vw] text-center hidden md:block`}>{description}</p>
      </motion.div>
    </div>
  );
};

export default Project;
