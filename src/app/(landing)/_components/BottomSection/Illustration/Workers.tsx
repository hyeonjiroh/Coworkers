'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';
import { workersStyle } from '@/app/(landing)/_components/styles/illustrationStyle';
import { workersMotion } from '@/app/(landing)/_components/styles/motionStyle';

const Workers = ({ className }: { className?: string }) => {
  const [isFirstFrame, setIsFirstFrame] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstFrame((prev) => !prev);
    }, 350); // 프레임 변경 간격

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${className} flex w-full`}>
      {/* 인부1 */}
      <motion.div {...workersMotion}>
        <img
          src={
            isFirstFrame
              ? `${LANDING_IMAGE_URL}workers1.svg`
              : `${LANDING_IMAGE_URL}workers2_01.svg`
          }
          alt="걷는 인부1"
          className={workersStyle}
        />
      </motion.div>

      {/* 인부2 */}
      <motion.div {...workersMotion}>
        <img
          src={
            isFirstFrame
              ? `${LANDING_IMAGE_URL}workers2.svg`
              : `${LANDING_IMAGE_URL}workers3_01.svg`
          }
          alt="걷는 인부2"
          className={workersStyle}
        />
      </motion.div>

      {/* 인부3 */}
      <motion.div {...workersMotion}>
        <img
          src={
            isFirstFrame
              ? `${LANDING_IMAGE_URL}workers3.svg`
              : `${LANDING_IMAGE_URL}workers1_01.svg`
          }
          alt="걷는 인부3"
          className={workersStyle}
        />
      </motion.div>
    </div>
  );
};

export default Workers;
