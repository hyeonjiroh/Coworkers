// 기본 인풋
'use client';
import React from 'react';
import { inputBaseStyle } from '@/components/common/Input/InputBase/style';

interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string; // label 내용
  isInvalid?: boolean; // 유효성 검사 옵션
  // 아이콘 옵션
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  // 디자인 커스텀 옵션
  titleClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
  leftIconClassName?: string;
  rightIconClassName?: string;
}

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      id, // title과 함께 사용 시, label과 input 연결됨
      title,
      leftIcon,
      rightIcon,
      isInvalid,
      titleClassName = '',
      containerClassName = '',
      inputClassName = '',
      leftIconClassName = '',
      rightIconClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex w-full flex-col">
        {title && (
          <label htmlFor={`${id}`} className={`${titleClassName}`}>
            {title}
          </label>
        )}
        <div className={`${inputBaseStyle(isInvalid)} ${containerClassName}`}>
          {leftIcon && (
            <span className={`outline-none ${leftIconClassName}`}>
              {leftIcon}
            </span>
          )}
          <input
            id={id}
            ref={ref}
            {...props}
            className={`flex-1 outline-none ${inputClassName}`}
          />
          {rightIcon && (
            <span className={`outline-none ${rightIconClassName}`}>
              {rightIcon}
            </span>
          )}
        </div>
      </div>
    );
  }
);

InputBase.displayName = 'InputBase';

export default InputBase;
