// 계정 설정 페이지 사용 인풋
'use client';
import React from 'react';
import InputBase from '@/components/common/Input/InputBase';

interface InputChangeInfoProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'pale' | 'deep';
  label?: string;
}

const InputChangeInfo = ({
  variant,
  label,
  ...props
}: InputChangeInfoProps) => {
  return (
    <InputBase
      {...props}
      label={label}
      containerClassName={`h-[48px] ${variant === 'pale' ? 'bg-slate-700' : 'bg-slate-800'} `}
      inputClassName={`${variant === 'pale' ? 'placeholder:text-slate-400' : 'placeholder:text-slate-50'}`}
    />
  );
};

export default InputChangeInfo;
