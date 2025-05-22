// 팀 페이지: 팀 배너 스타일

import clsx from 'clsx';
import {
  teamItemWrapperStyle,
  RADIUS,
} from '@/app/(team)/team/_components/styles';

// 📌TeamBanner.tsx style
export const teamBannerWrapperStyle = clsx(
  'relative flex items-center justify-between p-6',
  teamItemWrapperStyle,
  'h-[64px] w-full',
  'border border-slate-50/10 bg-[#272e3f]',
  RADIUS
);

export const teamBannerImgStyle =
  'tablet:left-[75%] absolute left-1/2 -translate-x-1/2';

export const teamBannerTitleStyle = clsx(
  'text-xl-bold',
  'relative flex-1 pr-3',
  'min-w-0'
);
