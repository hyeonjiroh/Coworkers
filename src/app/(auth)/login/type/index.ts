export default interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType: 'name' | 'email' | 'password' | 'passwordConfirm';
  submitErrorMessage?: string;
  onValidChange?: (isValid: boolean) => void;
  // onEmptyChange?: (isEmpty: boolean) => void;
  onValueChange: (inputValue: string) => void;
}
