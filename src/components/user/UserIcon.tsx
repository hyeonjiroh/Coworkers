import IconRenderer from '@/components/common/Icons/IconRenderer';
import Image from 'next/image';
import clsx from 'clsx';

interface UserIconProps {
  image: string | null;
  responsive?: boolean; // true 설정 시 tablet 이하 size-6으로 변경
}

export default function UserIcon({ image, responsive = false }: UserIconProps) {
  const imageSizes = responsive ? '(max-width: 744px) 24px, 32px' : '32px';

  return (
    <div
      className={clsx(
        'relative flex shrink-0 items-center justify-center overflow-hidden',
        'rounded-full border border-slate-50/10 bg-slate-700',
        responsive ? 'tablet:size-8 size-6' : 'size-8'
      )}
    >
      {image ? (
        <Image
          src={image}
          className="object-cover"
          sizes={imageSizes}
          fill
          alt="유저 프로필 이미지"
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
