import { cn } from "~/utils/cn";

export default function Heading({
  title,
  subtitle,
  description,
  dark,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  dark: boolean;
}) {
  return (
    <div>
      {title && (
        <span
          className={cn(
            "text-white italic font-medium text-sm tracking-[0.5em] leading-1 mb-2 block",
            dark && "text-dark"
          )}
        >
          {title}
        </span>
      )}
      {subtitle && (
        <h2
          className={cn(
            "text-white font-semibold text-3xl mb-4 ",
            dark && "text-dark"
          )}
        >
          {subtitle}
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
