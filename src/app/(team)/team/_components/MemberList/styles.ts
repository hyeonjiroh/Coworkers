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
  'laptop:max-w-[384px]',
  'tablet:max-w-[216px] tablet:h-[73px]',
  'max-w-[163.5px] h-[68px]',
  'w-full',
  'bg-slate-800',
  'rounded-[16px]'
);

export const memberCardItemWrapperStyle = clsx(
  'flex items-center justify-between',
  'laptop:w-[336px] h-full',
  'tablet:w-[168px]',
  'w-[125px]'
);

export const memberCardTextWrapperStyle = clsx(
  'laptop:w-[200px] w-[102px] flex flex-col justify-center gap-0.5'
);
