'use client';
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';

interface InputTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'base' | 'box' | 'reply'; // 할 일 댓글 수정 | 자유게시판 | 할 일 댓글 작성
  title?: string; // label 내용
  titleClassName?: string;
  inputClassName?: string;
  onClick?: () => void;
  isSubmitDisabled?: boolean;
}

const InputTextarea = ({
  variant,
  id, // title과 함께 사용 시, label과 input 연결됨
  title,
  value,
  titleClassName = '',
  inputClassName = '',
  onClick,
  isSubmitDisabled = false,
  ...props
}: InputTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const el = textareaRef.current;

    if (!el || variant === 'box') return;

    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);

  return (
    <div className="relative flex w-full flex-col">
      {title && (
        <label htmlFor={`${id}`} className={`${titleClassName}`}>
          {title}
        </label>
      )}
      <textarea
        {...props}
        id={id}
        value={value}
        ref={textareaRef}
        className={clsx(
          'w-full resize-none overflow-hidden focus:outline-none', // base style

          variant === 'box' &&
            'scrollbar-hide overflow-y-auto rounded-xl border border-slate-50/10 bg-slate-800',

          variant === 'reply' && 'border-t border-b border-slate-50/10 py-3.5',
          inputClassName
        )}
      />
      {variant === 'reply' && (
        <button
          onClick={onClick}
          disabled={isSubmitDisabled}
          className={clsx(
            'absolute top-3 right-0',
            'flex items-center justify-center',
            'size-6 rounded-full bg-green-700',
            'transition-colors duration-100 hover:bg-green-800',
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
