'use client';
import Image from 'next/image';
import WriterInfo from '@/components/user/WriterInfo';
import EditDropdown from '@/app/(board)/boards/_components/EditDropdown';
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
    <article className="laptop:h-[176px] laptop:min-w-[560px] laptop:gap-10 rounded-xl border border-slate-700 bg-slate-800 px-8 py-6">
      <div className="flex justify-between">
        <Link href={ROUTES.ARTICLE(id)} className="flex-1 cursor-pointer">
          <div className="flex items-start">
            <p className="text-2lg-medium mb-13 line-clamp-2 h-10 flex-1 overflow-ellipsis text-slate-100">
              {title}
            </p>
            {image && (
              <div className="tablet:h-[72px] tablet:w-[72px] relative ml-4 h-[64px] w-[64px] flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={isValidImage ? image : defaultImage}
                  alt={isValidImage ? '썸네일' : '기본 썸네일'}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="image-cover rounded-lg"
                  onError={(e) => {
                    console.error('실제 요청 URL:', e.currentTarget.src); // 오류 로그
                    setIsValidImage(false);
                  }}
                />
              </div>
            )}
          </div>
        </Link>
        <EditDropdown onSelect={onSelect} />
      </div>
      <Link href={ROUTES.ARTICLE(id)} className="cursor-pointer">
        <div className="item-center mb-4 flex justify-between">
          <div className="flex items-center gap-3">
            <WriterInfo nickname={nickname} image={writerImage ?? null} />
            <span className="text-md-medium text-slate-400">{date}</span>
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
      </Link>
    </article>
  );
}
