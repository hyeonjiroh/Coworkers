import clsx from 'clsx';

// 📌 Top Section //

// Train.tsx wrapper
export const trainWrapper = clsx(
  'relative flex items-end justify-center',
  'laptop:w-full laptop:-space-x-5 -space-x-4'
);

// Train.tsx 기차1
export const train1Style = clsx(
  'laptop:w-[209px] laptop:h-[246px]',
  'tablet:w-[145px] tablet:h-[175px]',
  'h-[165px] w-[135px]',
  'shrink-0 object-contain'
);

// Train.tsx 기차2
export const train2Style = clsx(
  'laptop:w-[284px] laptop:h-[216px]',
  'tablet:w-[195px] tablet:h-[165px]',
  'h-[155px] w-[185px]',
  'shrink-0 object-contain'
);

// Train.tsx 기차3
export const train3Style = clsx(
  'laptop:w-[420px] laptop:h-[400px]',
  'tablet:w-[280px] tablet:h-[265px]',
  'h-[255px] w-[270px]',
  'shrink-0 object-contain'
);

// Smoke.tsx 흙먼지
export const smokeStyle = clsx(
  'absolute',
  'laptop:w-[255px] laptop:h-[110px]',
  'tablet:w-[166px] tablet:h-[71px]'
);

// Runner.tsx 인부
export const runnerStyle = clsx(
  'absolute',
  'laptop:w-[142px] laptop:h-[149px]',
  'tablet:w-[100px] tablet:h-[105px]',
  'h-[94px] w-[90px]'
);

// 📌 Bottom Section //

// Workers.tsx 인부들
export const workersStyle = clsx(
  'laptop:w-[152px] laptop:h-[225px]',
  'tablet:w-[120px] tablet:h-[178px]',
  'h-[93px] w-[62.5px]',
  'object-contain'
);
