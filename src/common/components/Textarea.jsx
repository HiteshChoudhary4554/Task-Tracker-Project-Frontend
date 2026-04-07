import React from "react";
import clsx from "clsx";

const Textarea = ({
  label,
  isErr = false,
  placeholder = "Enter text",
  rows = 4,
  ...props
}, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        ref={ref}
        placeholder={placeholder}
        className={clsx(
          "w-full px-3 py-2 rounded-lg border bg-[#292a2e] text-white outline-none resize-none",
          "focus:ring-2 focus:ring-blue-500",
          isErr ? "border-red-500" : "border-gray-600"
        )}
        {...props}
      />
    </div>
  );
};

export default Textarea;