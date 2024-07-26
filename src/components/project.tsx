import React, { useState, useEffect } from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  link,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="w-[45vw] h-[60vh] rounded-lg"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <div className="flex flex-col items-center justify-center">hi</div>
      ) : (
        <img src={image} alt={title} className="max-w-full bg-cover w-[45vw] h-[60vh] max-h-[750px] max-w-[1000px] min-h-[200px] min-w-[300px]"/>
      )}
    </div>
  );
};

export default Project;
