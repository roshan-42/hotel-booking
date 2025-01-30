import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#344A71] text-white px-4 py-2 rounded-lg cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
