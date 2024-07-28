"use client";

import Position from "./position";
import positions from "../../data/positions";

interface PositionProps {
    title: string;
    company: string;
    time: string;
    description: string;
    facts: string[];
}
export default function Experience() {
    return (
        <div>
            <p>Experience</p>
            <p>A summary of my software journey</p>
            {positions.map((position: PositionProps, index: number) => (
                <Position
                    key={index}
                    title={position.title}
                    company={position.company}
                    time={position.time}
                    description={position.description}
                    facts={position.facts}
                />
            ))}
        </div>
    );
}