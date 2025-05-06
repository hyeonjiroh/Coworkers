'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/(landing)/_components/styles/motionStyle';

const StartButton = ({ className }: { className?: string }) => {
  return (
    <motion.div {...fadeInUp} className="flex justify-center">
      <button
        className={clsx(
          'tablet:h-[48px] tablet:w-[373px]',
          'h-[45px] w-[343px]',
          'rounded-[32px]',
          'bg-gradient-to-r from-green-700 to-green-500',
          'text-lg-semibold text-white',
          'transition-transform duration-200 ease-in-out',
          'hover:scale-105 hover:shadow-[0_0_6px_2px_rgba(255,255,255,0.25)]',
          className
        )}
      >
        지금 시작하기
      </button>
    </motion.div>
  );
};

export default StartButton;
