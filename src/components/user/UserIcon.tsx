import IconRenderer from '@/components/common/Icons/IconRenderer';
import Image from 'next/image';
import clsx from 'clsx';

interface UserIconProps {
  image: string | null;
  responsive?: boolean; // 반응형. true 설정 시 tablet 이하 size-6으로 변경
  sizeClass?: string; // 사이즈 직접 지정. ex) sizeClass='size-4'
}

export default function UserIcon({
  image,
  responsive = false,
  sizeClass,
}: UserIconProps) {
  const finalsizeClass = sizeClass
    ? sizeClass
    : responsive
      ? 'tablet:size-8 size-6'
      : 'size-8';

  return (
    <div
      className={clsx(
        'relative flex shrink-0 items-center justify-center overflow-hidden',
        'rounded-full border border-slate-50/10 bg-slate-700',
        finalsizeClass
      )}
    >
      {image ? (
        <Image
          src={image}
          alt="유저 프로필 이미지"
          fill
          className="object-cover"
        />
      ) : (
        <IconRenderer
          name="MemberIcon"
          className={responsive ? 'tablet:size-6 size-4.5' : 'size-6'}
        />
      )}
    </div>
  );
}
