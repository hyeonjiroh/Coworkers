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
export const taskListBarContainerStyle = clsx(
  'flex items-center justify-between',
  teamItemWrapperStyle,
  'h-[40px] w-full',
  'bg-slate-800',
  RADIUS,
  'cursor-pointer'
);

export const taskListBarTitleStyle = clsx(
  'relative flex-1 text-start',
  'max-w-[800px] min-w-0',
  'text-md-medium'
);

export const colorList = ['#A855F7', '#3B82F6', '#06B6D4', '#EC4899'];

export const colorChipStyle = clsx(
  'shrink-0',
  'w-[12px] h-[40px]',
  RADIUS_TL,
  RADIUS_BL
);

// 📌ProgressBadge.tsx style
export const progressBadgeContainerStyle = clsx(
  'flex items-center justify-center shrink-0 gap-1',
  'h-[25px] min-w-[58px]',
  'bg-slate-900',
  RADIUS
);

export const progressBadgeTextStyle = 'text-md-regular text-green-700';
