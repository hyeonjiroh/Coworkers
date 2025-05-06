import clsx from 'clsx';
import LandingBottomBg from '@/app/(landing)/_components/BottomSection/LandingBottomBg';
import { LandingBottomText } from '@/app/(landing)/_components/BottomSection/LandingBottomText';
import Workers from '@/app/(landing)/_components/BottomSection/Illustration/Workers';

const LandingBottomSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} relative flex w-full flex-col items-center text-center`}
    >
      {/* 배경 크기 고정용 컨테이너 */}
      <div className="relative flex max-w-none min-w-[1920px] justify-center overflow-hidden">
        <LandingBottomBg />

        <LandingBottomText className="laptop:mt-55 tablet:mt-45 absolute mt-25" />

        {/* 걷는 인부들 모션 */}
        <Workers
          className={clsx(
            'absolute',
            'laptop:bottom-[26%] laptop:left-[25%]',
            'tablet:bottom-[29%] tablet:left-[30%]',
            'bottom-[30%] left-[36%]'
          )}
        />
      </div>
    </section>
  );
};

export default LandingBottomSection;
