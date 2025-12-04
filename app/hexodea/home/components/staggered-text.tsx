import { HTMLAttributes } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "~/utils/cn";

interface DropLetterProps extends HTMLAttributes<HTMLDivElement> {
  applyMask?: boolean;
  text?: string;
  delay?: number;
  direction?: "up" | "drop";
}

export default function StaggeredLetter({
  applyMask = true,
  text = "Animata",
  delay = 0.09,
  direction = "drop",
  className,
  ...props
}: DropLetterProps) {
  const common = "text-5xl font-semibold drop-shadow";

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 150 : -150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-foreground",
        className
      )}
      {...props}
    >
      {applyMask && (
        <div className={cn(common, "absolute text-gray-400")}>{text}</div>
      )}

      <div className="flex">
        {text.split("").map((letter, index) => (
          <motion.div
            key={index}
            className={common}
            variants={letterVariants}
            initial="hidden"
            animate="show"
            transition={{
              delay: index * delay,
            }}
          >
            {letter === " " ? <span>&nbsp;</span> : letter}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
