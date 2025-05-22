import InputBase from '@/components/common/Input/InputBase';
import Button from '@/components/common/Button';

export interface JoinTeamFormProps {
  link: string;
  onLinkChange: (v: string) => void;
  onSubmit: () => void;
  error?: string;
  isLoading?: boolean;
}

export default function JoinTeamForm({
  link,
  onLinkChange,
  onSubmit,
  error,
  isLoading,
}: JoinTeamFormProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="text-md-regular tablet:w-[460px] tablet:text-lg-regular flex w-[343px] flex-col items-center">
      <h1 className="text-2xl-medium laptop:text-4xl-medium tablet:mb-20 mb-6">
        팀 참여하기
      </h1>

      <div className="mb-10 w-full self-start">
        <InputBase
          id="teamLink"
          title="팀 링크"
          placeholder="팀 링크를 입력해주세요."
          value={link}
          isInvalid={Boolean(error)}
          onChange={(e) => onLinkChange(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          titleClassName="mb-3"
          containerClassName="h-11 tablet:h-12 bg-slate-800"
          inputClassName="w-full h-11 tablet:h-12"
        />
        {error && <p className="text-md-medium mt-2 text-red-500">{error}</p>}
      </div>

      <div className="mb-6 w-full">
        <Button
          variant="primary"
          styleType="filled"
          size="lg"
          radius="sm"
          className="text-lg-semibold w-full"
          onClick={onSubmit}
          disabled={!link.trim() || isLoading}
        >
          {isLoading ? '처리 중...' : '참여하기'}
        </Button>
      </div>

      <p className="text-md-regular tablet:text-lg-regular">
        공유받은 팀 링크를 입력해 참여할 수 있어요.
      </p>
    </div>
  );
}
