// 상단 섹션 text 및 애니메이션
import { motion } from 'framer-motion';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';

const description = '함께 만들어가는 투두 리스트';
const title = 'Coworkers';

const descriptionStyle =
  'laptop:text-[48px] tablet:text-[40px] text-[24px] font-semibold';
const titleStyle =
  'laptop:text-[64px] tablet:text-[48px] text-[32px] font-semibold';

const motionContainer = {
  ani: {
    transition: {
      staggerChildren: 0.07, // 1행 텍스트 모션 전체 실행 시간
    },
  },
};

const motionChild = {
  ani: {
    y: [0, -20, 0],
    transition: {
      duration: 0.4, // 1행 텍스트 모션 글자별 실행 시간
      ease: 'easeOut',
    },
  },
};

export default function LandingTopText({ className }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col`}>
      {/* ✏️1행_설명 */}
      <motion.div
        variants={motionContainer}
        animate="ani"
        className="flex flex-wrap items-center justify-center"
      >
        {/* 문장을 글자로 분리, 각 글자에 index 부여 */}
        {description.split('').map((char, index) =>
          char === ' ' ? (
            <span key={index} className="tablet:w-3 w-1.5" /> // 공백 제거 방지
          ) : (
            <motion.span key={index} variants={motionChild}>
              <h1 className={`${descriptionStyle}`}>{char}</h1>
            </motion.span>
          )
        )}
        {/* 아이콘 */}
        <motion.span variants={motionChild}>
          <IconRenderer
            name="RepairIcon"
            className={clsx(
              'laptop:h-[56px] laptop:w-[56px] tablet:w-[48px] tablet:h-[48px] h-[28px] w-[28px]',
              'tablet:ml-[16px] ml-[4px] inline-block'
            )}
          />
        </motion.span>
      </motion.div>

      {/* ✏️2행_제목 */}
      <div className="relative inline-block overflow-hidden">
        <h1
          className={clsx(
            titleStyle,
            'bg-gradient-to-r from-green-700 to-[#CEF57E] bg-clip-text text-transparent',
            'relative'
          )}
        >
          {title}
        </h1>
        {/* 빛 효과 레이어 */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            delay: description.length * 0.05,
            ease: 'easeInOut',
          }}
          className={clsx(
            titleStyle,
            'absolute inset-0',
            'bg-gradient-to-r from-transparent via-white to-transparent',
            'bg-clip-text text-transparent',
            'blur-sm'
          )}
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
