// 회원가입, 로그인 사용 인풋
'use client';
import React, { useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from '@/utils/inputValidation';
import IconRenderer from '@/components/common/Icons/IconRenderer';

interface InputAuthProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  title?: string;
  value: string;
  invalidMessage?: string;
  pattern?: 'name' | 'email' | 'password' | 'passwordMatch';
  onValueChange: (value: string) => void;
  originalPassword?: string;
}

const InputAuth = ({
  id,
  title,
  value,
  pattern,
  invalidMessage,
  onValueChange,
  originalPassword,
  ...props
}: InputAuthProps) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onValueChange(val);

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
      setIsInvalid(!validatePasswordMatch(originalPassword ?? '', val));
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
        titleClassName="mb-[8px]"
        containerClassName="relative h-[48px] bg-slate-800"
        inputClassName="placeholder:text-slate-500"
        // 비밀번호만 암호화
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
};

export default InputAuth;
