// 팀 페이지: 할 일 목록 섹션 스타일

import clsx from 'clsx';
import {
  teamItemWrapperStyle,
  RADIUS,
  RADIUS_TL,
  RADIUS_BL,
} from '@/app/(team)/team/_components/styles';

// 📌TaskListBarList.tsx style
export const listContainerStyle = clsx(
  'flex flex-col',
  teamItemWrapperStyle,
  'w-full'
);

// 📌TaskListBar.tsx style
export const taskListBarWrapperStyle = clsx(
  'flex items-center justify-between',
  teamItemWrapperStyle,
  'h-[40px] w-full',
  'bg-slate-800',
  RADIUS
);

export const taskListBarTitleStyle = clsx(
  'text-md-medium',
  'relative flex-1 text-start',
  'laptop:max-w-[800px] tablet:max-w-[460px] max-w-[255px]',
  'min-w-0'
);

export const colorList = ['#A855F7', '#3B82F6', '#06B6D4', '#EC4899'];

export const colorChipStyle = clsx('w-[12px] h-[40px]', RADIUS_TL, RADIUS_BL);

// 📌ProcessBadge.tsx style
export const processBadgeWrapperStyle = clsx(
  'h-[25px] w-[58px]',
  'bg-slate-900',
  RADIUS
);
