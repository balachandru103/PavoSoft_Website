import React, { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

interface CustomTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>}
      <textarea
        className={clsx(
          "w-full border border-slate-300 rounded-md bg-surface px-4 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-600",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default CustomTextarea;
