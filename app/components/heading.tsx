import { cn } from "~/utils/cn";

export default function Heading({
  title,
  description,
  dark,
  fullWidth,
}: {
  title?: string;
  description?: string;
  dark: boolean;
  fullWidth?: boolean;
}) {
  return (
    <div>
      {title && (
        <h2
          className={cn(
            "text-white font-semibold text-5xl mb-4 ",
            dark && "text-dark"
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            fullWidth ? "w-full" : "lg:w-2/3",
            "text-white font-normal text-base",
            dark && "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
