'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';

interface InputTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'base' | 'box' | 'reply'; // 할 일 댓글 수정 | 자유게시판 | 할 일 댓글 작성
  className?: string;
  onClick?: () => void;
}

const InputTextarea = ({
  variant,
  className = '',
  onClick,
  ...props
}: InputTextareaProps) => {
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
        className={clsx(
          'w-full resize-none overflow-hidden focus:outline-none', // base style

          variant === 'box' &&
            'rounded-[12px] border border-slate-50/10 bg-slate-800',

          variant === 'reply' && 'border-t border-b border-slate-50/10 py-3',
          className
        )}
      />
      {variant === 'reply' && (
        <button
          onClick={onClick}
          className={clsx(
            'absolute top-3 right-0',
            'flex items-center justify-center',
            'size-6 rounded-full bg-green-700',
            'transition-colors duration-100 hover:bg-green-800 focus:bg-green-900 active:bg-green-900',
            'disabled:cursor-default disabled:bg-slate-400'
          )}
        >
          <IconRenderer name="ArrowTopIcon" size={16} />
        </button>
      )}
    </div>
  );
};

export default InputTextarea;
