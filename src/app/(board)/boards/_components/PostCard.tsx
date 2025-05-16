'use client';
import Image from 'next/image';
import WriterInfo from '@/components/user/WriterInfo';
import EditDropdown from '@/app/(board)/boards/_components/EditDropdown';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { useState } from 'react';

type PostCardProps = {
  id: number;
  title: string;
  date: string;
  nickname: string;
  likes: number;
  image?: string;
  writerImage?: string | null;
  onSelect: (option: string) => void;
};

export default function PostCard({
  id,
  title,
  date,
  nickname,
  likes,
  image,
  writerImage,
  onSelect,
}: PostCardProps) {
  const [isValidImage, setIsValidImage] = useState(true);
  const defaultImage = '/image/default_card.svg';

  return (
    <article className="tablet:h-[176px] tablet:px-8 flex h-[162px] flex-col justify-between rounded-xl border border-slate-700 bg-slate-800 px-4 py-6">
      <div className="flex justify-between gap-6">
        <Link href={ROUTES.ARTICLE(id)} className="cursor-pointer">
          <p className="tablet:max-w-[250px] tablet:h-14 tablet:leading-7 tablet:text-2lg-medium text-md-medium line-clamp-2 h-12 max-w-[224px] leading-6 overflow-ellipsis text-slate-300">
            {title}
          </p>
        </Link>
        <div className="flex gap-4">
          {image && (
            <div className="tablet:size-[72px] relative size-16 flex-shrink-0 rounded-lg">
              <Image
                src={isValidImage ? image : defaultImage}
                alt={isValidImage ? '썸네일' : '기본 썸네일'}
                fill
                className="image-cover rounded-lg"
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  console.error('실제 요청 URL:', e.currentTarget.src);
                  setIsValidImage(false);
                }}
              />
            </div>
          )}
          <EditDropdown onSelect={onSelect} />
        </div>
      </div>
      <div className="item-center flex justify-between">
        <div className="flex items-center gap-4">
          <WriterInfo nickname={nickname} image={writerImage ?? null} />
          <div className="h-3 border border-slate-700"></div>
          <span className="text-md-medium text-slate-400">{date}</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <IconRenderer name="HeartEmptyIcon" />
          <p className="text-xs-regular text-slate-400">{likes}</p>
        </div>
      </div>
    </article>
  );
}
