import { cn } from "~/utils/cn";

export default function BoldCopy({
  text = "animata",
  className,
  textClassName,
  backgroundTextClassName,
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
}) {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center bg-background px-2 py-2 md:px-6 md:py-4",
        className
      )}
    >
      <div
        className={cn(
          "text-5xl lg:text-7xl font-bold text-white opacity-30 uppercase text-foreground/15 transition-all group-hover:opacity-50",
          backgroundTextClassName
        )}
      >
        {text}
      </div>
      <div
        className={cn(
          "text-3xl lg:text-5xl absolute font-bold uppercase text-foreground transition-all group-hover:text-5xl group-hover:lg:text-7xl text-white",
          textClassName
        )}
      >
        {text}
      </div>
    </div>
  );
}
