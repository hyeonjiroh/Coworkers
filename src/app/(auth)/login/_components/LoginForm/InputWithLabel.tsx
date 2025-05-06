'use client';

import InputWithLabelProps from '@/app/(auth)/login/type';
import Icons from '@/components/common/Icons';
import { validateEmail, validatePassword } from '@/utils/inputValidation';
import { useEffect, useState } from 'react';

export default function InputWithLabel({
  inputType,
  onValidChange,
  onValueChange,
  submitErrorMessage,
  ...props
}: InputWithLabelProps) {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // error message when input is not valid
  useEffect(() => {
    switch (inputType) {
      case 'email':
        setErrorMessage('올바른 형식의 이메일을 입력해주세요.');
        break;

      case 'password':
        setErrorMessage(
          '비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.'
        );
        break;
    }
  }, [inputType]);

  // check if input is empty after blur
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    if (!inputValue) {
      setIsInputEmpty(true);
    } else {
      setIsInputEmpty(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();

    // handle falsy input
    if ((inputValue ?? '') === '') {
      setIsInputEmpty(true);
      return;
    } else {
      setIsInputEmpty(false);
    }

    // email
    if (inputType === 'email') {
      const isValid = validateEmail(inputValue);
      setIsInputValid(isValid);
      onValidChange?.(isValid);
      // send email input to upper component
      if (isValid) {
        onValueChange(inputValue);
      }
    }

    // password
    if (inputType === 'password') {
      const isValid = validatePassword(inputValue);
      setIsInputValid(isValid);
      onValidChange?.(isValid);
      // send password input to upper component
      if (isValid) {
        onValueChange(inputValue);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // map inputType to korean label
  const inputTypeMap = {
    name: '이름',
    email: '이메일',
    password: '비밀번호',
    passwordConfirm: '비밀번호 확인',
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-lg-medium" htmlFor={inputType}>
        {inputTypeMap[inputType]}
      </label>

      {/*입력 필드*/}
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
          className="w-full rounded-xl border border-slate-50/10 bg-slate-800 p-4"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          {...props}
        />

        {/*비밀번호 눈모양 토글*/}
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

      {isInputEmpty && !isInputValid && (
        // 비어있고, 유효하지도 않음
        <div className="text-danger">
          {inputType === 'password'
            ? `${inputTypeMap[inputType]}를 입력해주세요.`
            : `${inputTypeMap[inputType]}을 입력해주세요.`}
        </div>
      )}

      {!isInputEmpty && !isInputValid && (
        // 비어있지는 않지만, 유효하지 않음
        <div className="text-danger">{errorMessage}</div>
      )}

      {submitErrorMessage && (
        <div className="text-danger">{submitErrorMessage}</div>
      )}
    </div>
  );
}
