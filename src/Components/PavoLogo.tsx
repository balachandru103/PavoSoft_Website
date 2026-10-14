import React from "react";

export interface PavoLogoIconProps {
  className?: string;
}

export const PavoLogoIcon: React.FC<PavoLogoIconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 22C6 13 11 5 19 3C23 8 23 16 17 21C13 25 9 24 6 22Z"
      fill="url(#pavoBlueGradient)"
    />
    <path
      d="M13 16C13 11 16 7 21 5C23 9 23 14 19 17C16 20 14 18 13 16Z"
      fill="url(#pavoCyanGradient)"
    />
    <circle cx="18.5" cy="12" r="2.2" fill="#FFFFFF" />
    <defs>
      <linearGradient
        id="pavoBlueGradient"
        x1="6"
        y1="3"
        x2="22"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00C2FF" />
        <stop offset="1" stopColor="#0052FF" />
      </linearGradient>
      <linearGradient
        id="pavoCyanGradient"
        x1="13"
        y1="5"
        x2="23"
        y2="19"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00F0FF" />
        <stop offset="1" stopColor="#0072FF" />
      </linearGradient>
    </defs>
  </svg>
);

interface PavoLogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  iconClassName?: string;
  textClassName?: string;
  fontWeight?: "bold" | "extrabold";
}

export const PavoLogo: React.FC<PavoLogoProps> = ({
  className = "",
  variant = "dark",
  size = "md",
  iconClassName = "",
  textClassName = "",
  fontWeight = "bold",
}) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-11 h-11",
  };
  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };
  const textColor = variant === "light" ? "text-white" : "text-[#0F172A]";
  const textWeight = fontWeight === "extrabold" ? "font-extrabold" : "font-bold";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <PavoLogoIcon
        className={`${iconSizes[size]} flex-shrink-0 ${iconClassName}`}
      />
      <span
        className={`${textSizes[size]} ${textWeight} tracking-tight font-sans ${textColor} ${textClassName}`}
      >
        PavoSoft
      </span>
    </div>
  );
};

export default PavoLogo;
