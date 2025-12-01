import * as React from "react";
import { cn } from "~/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  mask?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type, ...props }, ref) => {
    return (
      <fieldset className="fieldset">
        {label && <p className="label">{label}</p>}
        <input
          ref={ref}
          {...props}
          type={type || "text"}
          className={cn(
            "bg-[#F8F7FC] p-4 rounded-lg focus:outline-none shadow text-xl",
            className
          )}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </fieldset>
    );
  }
);
Input.displayName = "Input";

export { Input };
