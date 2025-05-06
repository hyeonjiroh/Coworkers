// 하단 섹션 text 및 애니메이션
import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/(landing)/_components/styles/motionStyle';

export const LandingBottomText = ({ className }: { className?: string }) => {
  return (
    <motion.div
      {...fadeInUp}
      className={`${className} tablet:gap-[24px] flex flex-col gap-[16px]`}
    >
      <h1 className="tablet:text-[40px] text-[24px] font-semibold">
        지금 바로 시작해 보세요
      </h1>
      <p className="tablet:text-[24px] text-[16px] font-medium">
        팀원 모두와 같은 방향, <br className="tablet:hidden" />
        같은 속도로 나아가는 가장 쉬운 방법
      </p>
    </motion.div>
  );
};
