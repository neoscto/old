import React from "react";

const CustomCheckbox = ({ checked, onChange }: any) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        className="opacity-0 absolute h-full w-full top-0 left-0 cursor-pointer"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`w-5 h-5 border border-white rounded ${
          checked ? "bg-white" : "bg-green"
        }`}
      >
        {checked && (
          <svg
            className="w-4 h-4 mx-auto mt-0.5 text-green"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default CustomCheckbox;
