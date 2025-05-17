import IconRenderer from '@/components/common/Icons/IconRenderer';
import Image from 'next/image';
import clsx from 'clsx';

interface UserIconProps {
  image: string | null;
  sizeClass?: string; // 외부 원형 아이콘 크기
  imageSize?: string; // 이미지 예상 크기
  iconClass?: string; // 내부 아이콘 크기
}

export default function UserIcon({
  image,
  sizeClass = 'size-8',
  imageSize = '32px',
  iconClass = 'size-6',
}: UserIconProps) {
  return (
    <div
      className={clsx(
        'relative flex shrink-0 items-center justify-center overflow-hidden',
        'rounded-full border border-slate-50/10 bg-slate-700',
        sizeClass
      )}
    >
      {image ? (
        <Image
          src={image}
          alt="유저 프로필 이미지"
          sizes={imageSize}
          fill
          className="object-cover"
        />
      ) : (
        <IconRenderer name="MemberIcon" className={iconClass} />
      )}
    </div>
  );
}
