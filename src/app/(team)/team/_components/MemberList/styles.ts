// 팀 페이지: 멤버 섹션 스타일

import clsx from 'clsx';
import { teamItemWrapperStyle } from '@/app/(team)/team/_components/styles';

// 📌MemberList.tsx style
export const memberListContainerStyle = clsx(
  'flex flex-col',
  teamItemWrapperStyle,
  'w-full'
);

export const memberListWrapperStyle = clsx(
  'grid grid-cols-2 tablet:grid-cols-3 tablet:gap-6 gap-4',
  teamItemWrapperStyle,
  'w-full'
);

// 📌MemberCard.tsx style
export const memberCardContainerStyle = clsx(
  'flex items-center justify-center',
  'laptop:max-w-[384px] tablet:h-[73px] h-[68px] min-w-0',
  'bg-slate-800',
  'p-3 rounded-[16px]',
  'cursor-pointer'
);

export const memberCardItemWrapperStyle = clsx(
  'flex items-center justify-between',
  'laptop:max-w-[336px] h-full',
  'w-full'
);

export const memberCardTextWrapperStyle = clsx(
  'flex flex-col justify-center gap-0.5',
  'laptop:max-w-[200px] tablet:max-w-[120px] max-w-[85px]',
  'w-full'
);
