import React from "react";
import clsx from "clsx";

const Select = (
  {
    label,
    isErr = false,
    options = [],
    placeholder = "Select an option",
    ...props
  },
  ref
) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-300">{label}</label>
      )}
      <select
        ref={ref}
        className={clsx(
          "w-full px-3 py-2 rounded-lg bg-[#292a2e] text-white outline-none",
          "focus:ring-2 focus:ring-blue-500",
          isErr ? "border-red-500" : "",
        )}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
