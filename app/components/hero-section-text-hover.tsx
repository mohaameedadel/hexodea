import React from "react";
import { Map } from "lucide-react";

import { cn } from "~/utils/cn";

interface ItemProps {
  emoji: string;
  position: string;
}

interface HeroCardProps {
  text: string;
  destinations?: ItemProps[];
  treasures?: ItemProps[];
  className?: string;
}

const HeroSectionTextHover: React.FC<HeroCardProps> = ({ className, text }) => {
  const destinations: ItemProps[] = [
    {
      emoji: "🪂",
      position:
        "hidden md:block top-0 group-hover:-rotate-[10deg] group-hover:-translate-y-30 -left-[380px]",
    },
    {
      emoji: "💎",
      position:
        "hidden md:block top-0 group-hover:-rotate-[20deg] group-hover:-translate-x-20 -left-[200px]",
    },
    {
      emoji: "🚁",
      position:
        "hidden md:block top-0 group-hover:rotate-[10deg] group-hover:-translate-y-24 left-[350px]",
    },
    {
      emoji: "🏯",
      position:
        "hidden md:block top-0 group-hover:rotate-[20deg] group-hover:translate-x-16 left-[160px]",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center gap-1">
        <div className="group relative flex items-center">
          <span
            className={cn("text-white group-hover:text-sky-400", className)}
          >
            {text}
          </span>
          <div className="duration-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100">
            {destinations.map((dest, index) => (
              <span
                key={index}
                className={cn(
                  "pointer-events-none absolute transform transition-transform duration-500 group-hover:scale-110 text-4xl z-10",
                  dest.position
                )}
              >
                {dest.emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTextHover;
