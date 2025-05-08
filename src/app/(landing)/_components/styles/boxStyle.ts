'use client';
import clsx from 'clsx';

// LandingBox.tsx style
export const defaultBoxSize = clsx(
  'laptop:h-[419px] laptop:w-[996px]',
  'tablet:h-[354px] tablet:w-[696px]',
  'h-[467px] w-[343px]'
);

export const boxStyle = clsx(
  'flex justify-center tablet:items-stretch',
  'rounded-[40px]'
);

export const borderGradientStyle = clsx(
  defaultBoxSize,
  'relative',
  'rounded-[40px] p-[1px]', // p = border size
  'bg-gradient-to-r from-green-700 to-[#CEF57E]',
  'shadow-[0_0_12px_2px_rgba(255,255,255,0.25)]'
);

export const imageSize = clsx(
  'relative',
  'tablet:h-[268.5px] tablet:w-[232px]',
  'laptop:h-[338px] laptop:w-[291px]',
  'h-[273px] w-[235px]'
);

export const textStyle = 'laptop:text-2xl-medium text-2lg-medium';

export const getFlexDirection = (
  tabletReverse?: boolean,
  mobileReverse?: boolean
) => {
  return clsx(
    'tablet:flex-row flex-col',
    tabletReverse && 'tablet:flex-row-reverse',
    mobileReverse && 'flex-col-reverse'
  );
};
