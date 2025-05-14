import clsx from 'clsx';

export const RADIUS = 'rounded-[12px]';
export const RADIUS_TL = 'rounded-tl-[12px]';
export const RADIUS_BL = 'rounded-bl-[12px]';

// 팀 페이지 내부 아이템 공통 래퍼
export const teamItemWrapperStyle = clsx(
  'laptop:max-w-[1200px] tablet:max-w-[696px] max-w-[343px] min-w-0'
);

// 📌Pagination.tsx style
export const paginationStyle = clsx(
  'flex items-center justify-center',
  'size-4 rounded-full',
  'transition-colors duration-100'
);

export const getButtonStyle = (disabled: boolean) =>
  `${paginationStyle} ${disabled ? 'bg-slate-700' : 'bg-slate-800 hover:bg-slate-700'}`;
