'use client';
import Image from 'next/image';
import WriterInfo from '@/components/user/WriterInfo';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { useState } from 'react';

type BestPostCardProps = {
  id: number;
  title: string;
  date: string;
  nickname: string;
  likes: number;
  image?: string;
  writerImage: string | null | undefined;
};

export default function BestPostCard({
  id,
  title,
  date,
  nickname,
  likes,
  image,
  writerImage,
}: BestPostCardProps) {
  const [isValidImage, setIsValidImage] = useState(true);
  const defaultImage = '/image/default_card.svg';

  return (
    <article className="tablet:px-6 tablet:h-55 tablet:pt-4 flex h-[178px] flex-col gap-3 rounded-xl border border-slate-700 bg-slate-800 px-4 pt-2.5">
      <div className="flex items-center gap-1">
        <IconRenderer name="BestBadgeIcon" />
        <p className="text-lg-semibold text-white">Best</p>
      </div>
      <div className="tablet:gap-6 flex flex-col gap-4">
        <div className="tablet:h-[96px] tablet:gap-4 flex h-[74px] gap-6">
          <div className="flex flex-col justify-between">
            <Link href={ROUTES.ARTICLE(id)}>
              <p className="tablet:h-14 tablet:leading-7 tablet:text-2lg-medium text-md-medium line-clamp-2 h-12 leading-6 overflow-ellipsis text-slate-300">
                {title}
              </p>
            </Link>
            <div className="text-md-medium text-slate-400">{date}</div>
          </div>
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
        </div>
        <div className="item-center flex justify-between">
          <WriterInfo nickname={nickname} image={writerImage ?? null} />
          <div className="flex items-center justify-center gap-1">
            <IconRenderer name="HeartEmptyIcon" />
            <p className="text-xs-regular text-slate-400">{likes}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
