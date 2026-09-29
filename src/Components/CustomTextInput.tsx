import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface CustomTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>}
      <input
        className={clsx(
          "w-full border border-slate-300 rounded-md bg-surface px-4 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-600",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default CustomTextInput;
