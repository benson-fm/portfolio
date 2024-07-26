"use client";

import Project from "./project";

export default function Portfolio() {
  return (
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold pt-24">Portfolio</h1>
        <div className="flex flex-col gap-10 pt-10">
          <Project
            title="Project 1"
            description="This is a description"
            image="https://via.placeholder.com/150"
            link="https://www.google.com"
          />
          <Project
            title="Project 2"
            description="This is a description"
            image="https://via.placeholder.com/150"
            link="https://www.google.com"
          />
          <Project
            title="Project 3"
            description="This is a description"
            image="https://via.placeholder.com/150"
            link="https://www.google.com"
          />
        </div>
      </div>
  );
}
