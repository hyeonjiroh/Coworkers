'use client';

import InputWithLabelProps from '@/app/(auth)/login/type';

export default function InputWithLabel({
  inputType,
  ...props
}: InputWithLabelProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // validation, error message rendering
    console.log(e.target.value);
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
      <input
        type={inputType}
        id={inputType}
        name={inputType}
        required
        placeholder={`${inputTypeMap[inputType]}을 입력해주세요`}
        className={`w-full rounded-xl bg-slate-800 p-4`}
        onChange={handleInputChange}
        {...props}
      />
    </div>
  );
}
