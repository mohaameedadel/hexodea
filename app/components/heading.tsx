import { cn } from "~/utils/cn";

export default function Heading({
  title,
  description,
  dark,
}: {
  title?: string;
  description?: string;
  dark: boolean;
}) {
  return (
    <div>
      {title && (
        <h2
          className={cn(
            "text-white font-semibold text-3xl mb-4 ",
            dark && "text-dark"
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "text-white lg:w-1/3 font-normal text-base",
            dark && "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
