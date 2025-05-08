import clsx from 'clsx';

export const buttonStyle = clsx(
  'tablet:h-[48px] tablet:w-[373px]',
  'h-[45px] w-[343px]',
  'rounded-[32px]',
  'bg-gradient-to-r from-green-700 to-green-500',
  'text-lg-semibold text-white',
  'transition-transform duration-200 ease-in-out',
  'hover:scale-105 hover:shadow-[0_0_6px_2px_rgba(255,255,255,0.25)]'
);
