import React from "react";

/**
 * @typedef {Object} CardProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {boolean} [hover]
 * @property {() => void} [onClick]
 */

/**
 * @param {CardProps} props
 */
export default function Card({
  children,
  className = "",
  hover = true,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-lg border border-gray-200
        shadow-md p-6
        ${hover ? "hover:shadow-xl hover:scale-105" : ""}
        transition-all duration-300
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
