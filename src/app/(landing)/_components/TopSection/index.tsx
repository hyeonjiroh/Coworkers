'use client';
import clsx from 'clsx';
import LandingTopBg from '@/app/(landing)/_components/TopSection/LandingTopBg';
import LandingTopText from '@/app/(landing)/_components/TopSection/LandingTopText';
import {
  Light,
  Train,
  Runner,
  Smoke,
} from '@/app/(landing)/_components/TopSection/Illustration';

const LandingTopSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} flex w-full flex-col items-center text-center`}
    >
      {/* 배경 크기 고정용 컨테이너 */}
      <div className="relative flex max-w-none min-w-[1920px] justify-center overflow-hidden">
        <LandingTopBg className="relative z-1" />
        <Light />
        <LandingTopText className="laptop:mt-19 tablet:mt-22.5 absolute z-10 mt-12" />

        {/* 아이템 컨테이너 */}
        <div
          className={clsx(
            'absolute',
            'flex flex-col',
            'laptop:h-[940px] w-full', // 배경 이미지 사이즈
            'tablet:h-[750px]',
            'h-[550px]'
          )}
        >
          {/* 기차 모션 */}
          <Train
            className={clsx(
              'absolute',
              'laptop:bottom-[21%] tablet:bottom-[16%] bottom-[18%]',
              'tablet:pl-0 pl-20'
            )}
          />
          {/* 달리는 인부 모션 */}
          <Runner
            className={clsx(
              'z-5',
              'laptop:bottom-[16.3%] laptop:left-[35%]',
              'tablet:bottom-[11.5%] tablet:left-[40%]',
              'bottom-[13%] left-[43%]'
            )}
          />
          {/* 흙먼지 모션 */}
          <Smoke
            className={clsx(
              'z-5',
              'tablet:block hidden',
              'laptop:bottom-[20.5%] laptop:left-[19%]',
              'tablet:left-[30%] tablet:bottom-[14.5%]'
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingTopSection;
