"use client";
import React from 'react';

type InputProps = {
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  type?: string;
};

export default function Input({ value, onChange, placeholder, type = 'text' }: InputProps): JSX.Element {
  return (
    <input
      className="w-full px-3 py-2 rounded-md bg-[rgba(255,255,255,0.04)] border border-border text-sm"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      type={type}
    />
  );
}
