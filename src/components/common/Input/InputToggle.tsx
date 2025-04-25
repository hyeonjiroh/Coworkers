// 할 일 생성 모달(할 일 주기 선택),
// 자유게시판(정렬 선택) 사용 인풋
'use client';
import React from 'react';
import BaseInput from '@/components/common/Input/InputBase';
import IconRenderer from '@/components/common/Icons/IconRenderer';

interface InputToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'pale' | 'deep';
  onClick?: () => void;
}

const InputToggle = ({ variant, onClick, ...props }: InputToggleProps) => {
  return (
    <div className="relative">
      <BaseInput
        {...props}
        readOnly
        onClick={onClick}
        containerClassName={`relative h-[48px]
          ${variant === 'pale' ? 'bg-slate-700' : 'bg-slate-800'} `}
        inputClassName="text-md-regular"
        rightIcon={
          <button
            type="button"
            onClick={onClick}
            className="absolute top-1/2 right-3 -translate-y-1/2 outline-none"
          >
            <IconRenderer name="ToggleIcon" />
          </button>
        }
      />
    </div>
  );
};

export default InputToggle;
