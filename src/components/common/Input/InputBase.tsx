// 기본 인풋
import React from 'react';
import { inputBaseStyle } from '@/components/common/Input/style';

interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isInvalid?: boolean;
  labelClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
}

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      label,
      leftIcon,
      rightIcon,
      isInvalid,
      labelClassName = '',
      containerClassName = '',
      inputClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label className={`text-lg-medium ${labelClassName}`}>{label}</label>
        )}
        {/* 입력창 */}
        <div className={`${inputBaseStyle(isInvalid)} ${containerClassName}`}>
          {leftIcon && <span className="mr-2 outline-none">{leftIcon}</span>}
          <input
            ref={ref}
            {...props}
            className={`flex-1 pr-6 outline-none ${inputClassName}`}
          />
          {rightIcon && <span className="ml-2 outline-none">{rightIcon}</span>}
        </div>
      </div>
    );
  }
);

InputBase.displayName = 'InputBase';

export default InputBase;
