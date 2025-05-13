// Input 컴포넌트 유효성 검사 유틸

export function validateName(value: string, maxLength = 10) {
  return value.length <= maxLength;
}

export function validateEmail(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export function validatePassword(value: string, minLength = 8) {
  const hasAlphabet = /[a-zA-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(value);
  return (
    value.length >= minLength && hasAlphabet && hasNumber && hasSpecialChar
  );
}

export function validatePasswordConfirm(data: {
  password: string;
  passwordConfirm: string;
}) {
  return data.password === data.passwordConfirm;
}
