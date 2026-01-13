"use client";
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function Button({ children, href, onClick }: ButtonProps): JSX.Element {
  if (href) {
    return (
      <a href={href} className="inline-flex items-center px-4 py-2 rounded-md bg-[linear-gradient(90deg,var(--primary),var(--secondary))] text-white font-semibold shadow-sm hover:opacity-95 transition-opacity" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-flex items-center px-4 py-2 rounded-md bg-[linear-gradient(90deg,var(--primary),var(--secondary))] text-white font-semibold shadow-sm hover:opacity-95 transition-opacity">
      {children}
    </button>
  );
}
