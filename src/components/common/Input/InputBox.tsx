'use client';
import React, { useRef } from 'react';

interface InputBoxProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const InputBox = ({ className = '', ...props }: InputBoxProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  return (
    <textarea
      {...props}
      ref={textareaRef}
      onInput={handleInput}
      rows={1}
      className={`w-full resize-none overflow-hidden rounded-[12px] border border-slate-50/10 focus:border-green-800 focus:outline-none ${className}`}
    />
  );
};

export default InputBox;
