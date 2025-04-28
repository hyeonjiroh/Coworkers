import { InputSignup } from '@/components/common/Input';

export default function UpdatePasswordModal() {
  return (
    <div className="flex flex-col gap-4">
      <InputSignup
        label="새 비밀번호"
        value="임시 value"
        pattern="password"
        onValueChange={() => {}}
        placeholder="새 비밀번호를 입력해주세요."
      />
      <InputSignup
        label="새 비밀번호 확인"
        value="임시 value"
        pattern="passwordMatch"
        onValueChange={() => {}}
        placeholder="새 비밀번호를 다시 한 번 입력해주세요."
      />
    </div>
  );
}
