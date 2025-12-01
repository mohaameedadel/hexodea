import { cn } from "~/utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
}: ButtonProps) {
  const _renderContent = () => {
    if (loading) {
      return (
        <div>
          <span className="loading loading-spinner me-2"></span>
          Loading
        </div>
      );
    }
    return children;
  };
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        className,
        "btn bg-main button-shadow ring-4 ring-main/10 text-white px-10 py-2 h-full rounded-3xl text-lg font-medium block text-center"
      )}
    >
      {_renderContent()}
    </button>
  );
}
