'use client';
import Image from 'next/image';
import WriterInfo from '@/components/user/WriterInfo';
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
    <Link href={ROUTES.ARTICLE(id)}>
      <article className="laptop:min-w-[360px] tablet:w-full tablet:px-6 tablet:overflow-hidden h-full cursor-pointer rounded-xl border border-slate-700 bg-slate-800 px-6 py-4">
        <div className="mb-3.5 flex items-center gap-1">
          <Image
            src="/icons/best_badge_icon.svg"
            alt="베스트 게시글 뱃지"
            width={16}
            height={16}
          />
          <p className="text-lg-semibold text-white">Best</p>
        </div>
        <div className="mb-10">
          {image ? (
            <div className="flex h-[52px] gap-3">
              <p className="text-2lg-medium mb-3 line-clamp-2 w-full overflow-ellipsis text-slate-100">
                {title}
              </p>
              <div className="laptop:h-[72px] laptop:w-[72px] relative ml-4 h-[64px] w-[64px] flex-shrink-0 overflow-hidden rounded-lg">
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
            </div>
          ) : (
            <p className="text-2lg-medium mb-3 line-clamp-2 h-[42px] w-full overflow-ellipsis text-slate-100">
              {title}
            </p>
          )}
          <span className="text-md-medium text-slate-400">{date}</span>
        </div>
        <div className="item-center mb-4 flex justify-between">
          <div className="flex items-center gap-3">
            <WriterInfo nickname={nickname} image={writerImage ?? null} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/icons/heart_icon.svg"
              width={16}
              height={16}
              alt="좋아요 아이콘"
            />
            <p className="text-slate-400">{likes}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
