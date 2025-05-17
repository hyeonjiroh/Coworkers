// 팀 페이지: 리포트 섹션 스타일

import clsx from 'clsx';
import {
  teamItemWrapperStyle,
  RADIUS,
} from '@/app/(team)/team/_components/styles';

// 📌ReportBanner.tsx style
export const reportBannerContainerStyle = clsx(
  'flex items-center justify-center',
  teamItemWrapperStyle,
  'laptop:h-[217px] h-[224px]',
  'bg-slate-800',
  RADIUS
);

export const reportBannerItemWrapperStyle = clsx(
  'flex w-full items-center justify-between',
  'tablet:p-6 p-3',
  'tablet:gap-15 gap-6'
);

export const progressPercentStyle =
  'tablet:text-[40px] bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-[20px] leading-none font-bold text-transparent';

export const reportCardsWrapperStyle = clsx(
  'flex flex-col gap-4',
  'max-w-[400px]',
  'min-w-0 w-full h-full'
);

// 📌ReportCard.tsx style
export const reportCardContainerStyle = clsx(
  'flex items-center justify-center',
  'max-w-[400px]',
  'laptop:h-[76.5px] h-[80px] w-full min-w-0 p-4',
  'bg-slate-700',
  RADIUS
);

export const cardItemWrapperStyle = clsx(
  'flex items-center justify-between',
  'h-full w-full'
);
