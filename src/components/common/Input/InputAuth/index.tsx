// 회원가입, 로그인 사용 인풋
'use client';
import React, { useState, forwardRef } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from '@/utils/inputValidation';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { useFormContext } from 'react-hook-form';

interface InputAuthProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  title?: string;
  value?: string;
  invalidMessage?: string;
  pattern?: 'name' | 'email' | 'password' | 'passwordMatch';
  onValueChange?: (value: string) => void;
}

const InputAuth = forwardRef<HTMLInputElement, InputAuthProps>(
  (
    { id, title, value, pattern, invalidMessage, onValueChange, ...props },
    ref
  ) => {
    const { getValues } = useFormContext();
    const [isInvalid, setIsInvalid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      onValueChange?.(val);
      props.onChange?.(e);

      const currentPassword =
        pattern === 'passwordMatch' ? getValues('password') || '' : val;
      if (pattern === 'name') {
        setIsInvalid(!validateName(val));
      }
      if (pattern === 'email') {
        setIsInvalid(!validateEmail(val));
      }
      if (pattern === 'password') {
        setIsInvalid(!validatePassword(val));
      }
      if (pattern === 'passwordMatch') {
        setIsInvalid(
          !validatePasswordConfirm({
            password: currentPassword,
            passwordConfirm: val,
          })
        );
      }
    };

    return (
      <div>
        <InputBase
          {...props}
          id={id}
          title={title}
          value={value}
          onChange={handleChange}
          isInvalid={isInvalid}
          ref={ref}
          titleClassName="mb-[8px]"
          containerClassName="relative h-[48px] bg-slate-800"
          inputClassName="placeholder:text-slate-500"
          type={
            pattern === 'password' || pattern === 'passwordMatch'
              ? showPassword
                ? 'text'
                : 'password'
              : (props.type ?? 'text')
          }
          rightIcon={
            pattern === 'password' || pattern === 'passwordMatch' ? (
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute top-1/2 right-3 -translate-y-1/2 outline-none"
              >
                {showPassword ? (
                  <IconRenderer name="VisibilityOnIcon" />
                ) : (
                  <IconRenderer name="VisibilityOffIcon" />
                )}
              </button>
            ) : undefined
          }
        />
        {isInvalid && (
          <p className="text-danger text-md-medium mt-2">{invalidMessage}</p>
        )}
      </div>
    );
  }
);

InputAuth.displayName = 'InputAuth';

export default InputAuth;
