"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
}) => {
  const baseClasses = `
    px-6
    py-4.5
    text-lg
    font-urbanist
    font-medium
    tracking-[0.2px]
    leading-[140%]
    rounded-full
    min-h-[60px]
    transition-all
    duration-300
    ease-in-out
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-primary-500
      text-white
      shadow-button
      backdrop-blur-[50px]
      hover:bg-primary2
      active:transform
      active:scale-95
    `,
    secondary: `
      bg-neutral-20
      text-white
      hover:bg-opacity-30
      active:transform
      active:scale-95
    `,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
