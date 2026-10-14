import React from "react";
import iconImg from "../assets/logo_icon.jpg";

export interface PavoLogoIconProps {
  className?: string;
}

export const PavoLogoIcon: React.FC<PavoLogoIconProps> = ({
  className = "w-8 h-8",
}) => (
  <img
    src={iconImg}
    alt=""
    aria-hidden="true"
    draggable={false}
    className={`object-contain ${className}`}
  />
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
  fontWeight = "extrabold",
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
  const textColor = variant === "light" ? "text-white" : "text-[#020B2D]";
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