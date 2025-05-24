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
  'px-6 rounded-[16px]',
  'cursor-pointer'
);

export const memberCardItemWrapperStyle =
  'grid grid-cols-[min-content_1fr] grid-rows-[auto_auto] gap-x-3 w-full';

export const memberCardProfileWrapperStyle = clsx(
  'tablet:row-span-2 tablet:items-center',
  'flex flex-col col-span-1 row-span-1 items-start justify-center'
);

export const memberCardNameStyle = clsx(
  'text-md-medium',
  'col-span-1 col-start-2 row-span-1 row-start-1 self-center text-left',
  'truncate'
);

export const memberCardEmailStyle = clsx(
  'text-xs-regular text-slate-300',
  'tablet:col-span-1 tablet:col-start-2',
  'col-span-2 col-start-1 row-span-1 row-start-2 text-left',
  'mt-0.5',
  'truncate'
);
