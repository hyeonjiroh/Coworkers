'use client';

import { InputWithLabelProps } from '@/app/(auth)/login/type';
import Icons from '@/components/common/Icons';
import clsx from 'clsx';
import { useState } from 'react';

export default function InputWithLabel({
  inputType,
  errorMessage = [],
  onInputBlur,
  onInputChange,
  ...props
}: InputWithLabelProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputTypeMap: Record<InputWithLabelProps['inputType'], string> = {
    email: '이메일',
    password: '비밀번호',
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-3">
      <label className="text-lg-medium" htmlFor={inputType}>
        {inputTypeMap[inputType]}
      </label>

      <div className="relative">
        <input
          type={
            inputType === 'password'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : inputType
          }
          id={inputType}
          name={inputType}
          required
          placeholder={`${inputTypeMap[inputType]}을 입력해주세요.`}
          autoComplete="true"
          className={clsx(
            'w-full rounded-xl border bg-slate-800 p-4 outline-hidden',
            errorMessage.length > 0
              ? 'border-danger'
              : 'border-slate-50/10 focus:border-green-800'
          )}
          onBlur={onInputBlur?.(inputType)}
          onChange={onInputChange?.(inputType)}
          {...props}
        />

        {inputType === 'password' && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            {isPasswordVisible ? (
              <Icons.VisibilityOnIcon
                size={24}
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              />
            ) : (
              <Icons.VisibilityOffIcon
                size={24}
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              />
            )}
          </div>
        )}
      </div>
      {errorMessage && <span className="text-danger">{errorMessage}</span>}
    </div>
  );
}
