export default function ForgotPasswordButton({ ...props }) {
  return (
    <div className="mt-3 mb-10 flex justify-end">
      <button
        className="leading-normal font-medium text-emerald-500 underline"
        {...props}
      >
        비밀번호를 잊으셨나요?
      </button>
    </div>
  );
}
