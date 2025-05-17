import clsx from 'clsx';

// 📌공통 디자인
export const RADIUS = 'rounded-[12px]';
export const RADIUS_TL = 'rounded-tl-[12px]';
export const RADIUS_BL = 'rounded-bl-[12px]';

// 📌팀 페이지 내부 아이템 공통 wrapper
export const teamItemWrapperStyle = 'laptop:max-w-[1200px] min-w-0 w-full';

// 📌팀 페이지 헤더 섹션 style
export const teamHeaderStyle = clsx(
  teamItemWrapperStyle,
  'flex justify-between truncate mb-3'
);

// 📌Pagination.tsx style
export const paginationStyle = clsx(
  'flex items-center justify-center',
  'size-4 rounded-full',
  'transition-colors duration-100'
);

export const getButtonStyle = (disabled: boolean) =>
  `${paginationStyle} ${disabled ? 'bg-slate-700' : 'bg-slate-800 hover:bg-slate-700'}`;
