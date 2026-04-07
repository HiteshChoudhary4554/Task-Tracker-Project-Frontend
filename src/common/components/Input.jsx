import React from "react";
import clsx from "clsx";

const Input = ({
  label,
  isErr = false,
  placeholder = "Enter value",
  type = "text",
  ...props
}, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-300">{label}</label>
      )}

      <input
        placeholder={placeholder}
        ref={ref}
        type={type}
        className={clsx(
          "w-full px-3 py-2 rounded-lg border bg-[#292a2e] text-white outline-none",
          "focus:ring-2 focus:ring-blue-500",
          isErr ? "border-red-500" : "border-gray-600",
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
