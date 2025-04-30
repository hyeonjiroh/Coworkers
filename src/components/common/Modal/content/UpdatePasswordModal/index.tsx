import InputAuth from '@/components/common/Input/InputAuth';

export default function UpdatePasswordModal() {
  return (
    <div className="flex flex-col gap-4">
      <InputAuth
        id="new-password"
        title="새 비밀번호"
        value="임시 value"
        pattern="password"
        onValueChange={() => {}}
        placeholder="새 비밀번호를 입력해주세요."
      />
      <InputAuth
        id="password-match"
        title="새 비밀번호 확인"
        value="임시 value"
        pattern="passwordMatch"
        onValueChange={() => {}}
        placeholder="새 비밀번호를 다시 한 번 입력해주세요."
      />
    </div>
  );
}
