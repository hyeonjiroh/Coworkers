export default interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType: 'name' | 'email' | 'password' | 'passwordConfirm';
}
