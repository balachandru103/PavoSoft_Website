import React, { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "danger" | "outline" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-medium",
    md: "px-5 py-2.5 text-sm font-medium",
    lg: "px-7 py-3.5 text-base font-semibold",
  };

  const variantClasses = {
    primary: "bg-[#2563EB] hover:bg-blue-700 text-white shadow-sm hover:shadow",
    secondary: "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm",
    success: "bg-[#10B981] hover:bg-emerald-600 text-white shadow-sm hover:shadow",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    outline: "bg-transparent border border-[#2563EB] text-[#2563EB] hover:bg-blue-50",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
