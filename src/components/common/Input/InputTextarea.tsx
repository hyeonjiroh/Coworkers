'use client';
import React, { useRef } from 'react';

interface InputBoxProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'box' | 'reply';
  rightIcon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const InputTextarea = ({
  variant,
  rightIcon,
  className = '',
  iconClassName = '',
  ...props
}: InputBoxProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  return (
    <div className="relative w-full">
      <textarea
        {...props}
        ref={textareaRef}
        onInput={handleInput}
        rows={1}
        className={`w-full resize-none overflow-hidden border-slate-50/10 focus:outline-none ${
          variant === 'box'
            ? 'rounded-[12px] border focus:border-green-800'
            : 'border-t border-b'
        } ${className}`}
      />
      {rightIcon && (
        <span className={`absolute ${iconClassName} `}>{rightIcon}</span>
      )}
    </div>
  );
};

export default InputTextarea;
