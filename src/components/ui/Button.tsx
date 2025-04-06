import React from 'react';
import { cn } from '../../lib/utils';
import { ButtonProps } from '../../types/components';
import Link from 'next/link';

const AnimatedButton: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
  isExternal = false,
  icon,
  iconPosition = 'left',
  disabled = false,
}) => {
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  } as const;

  const variantClasses = {
    primary: 'bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90',
    secondary: 'bg-[var(--secondary3)] text-white  hover:bg-[var(--secondary3)]/80',
    outlinePrimary: "border border-[var(--primary)] bg-white hover:bg-gray-100 hover:text-gray-900",
    outlineSecondary: "border border-[var(--secondary3)] bg-white hover:bg-gray-100 hover:text-gray-900",
    gray: 'bg-[var(--gray)] text-[var(--secondary)] hover:bg-[var(--gray)]/60'
  } as const;

  const baseClasses = ` px-4 py-3 cursor-pointer inline-flex text-center items-center justify-center whitespace-nowrap rounded-full text-sm font-regular ring-offset-white transition-colors 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} `; 

  const buttonClass = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <div className='flex items-center flex-row text-center justify-center'>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </div>
  );

  if (to) {
    if (isExternal) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          {content}
        </a>
      );
    }

    return (
      <Link href={to} className={buttonClass}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClass}>
      {content}
    </button>
  );
};

export default AnimatedButton;