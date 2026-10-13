import React from "react";

interface PavoLogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export const PavoLogo: React.FC<PavoLogoProps> = ({
  className = "",
  variant = "dark",
  size = "md",
}) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Stylized Pavo Peacock Feather / Modern Tech Crest */}
      <div className={`${iconSizes[size]} relative flex items-center justify-center flex-shrink-0`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Outer elegant peacock plume curve in vibrant blue */}
          <path
            d="M8 38C8 24 16 12 28 6C34 16 32 28 24 36C18 42 12 41 8 38Z"
            fill="url(#pavoGradientPrimary)"
          />
          {/* Inner feather eye / cyan accent */}
          <path
            d="M20 28C20 21 24 15 31 11C35 18 34 25 29 30C25 34 22 32 20 28Z"
            fill="url(#pavoGradientCyan)"
          />
          {/* Central brilliant jewel core */}
          <circle cx="27" cy="22" r="3.5" fill="#FFFFFF" />
          <defs>
            <linearGradient
              id="pavoGradientPrimary"
              x1="8"
              y1="6"
              x2="34"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient
              id="pavoGradientCyan"
              x1="20"
              y1="11"
              x2="35"
              y2="32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06B6D4" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <span
        className={`font-bold tracking-tight font-sans ${textSizes[size]} ${
          isLight ? "text-white" : "text-[#0F172A]"
        }`}
      >
        PavoSoft
      </span>
    </div>
  );
};

export default PavoLogo;
