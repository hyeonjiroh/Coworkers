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
    }, 500); // 이미지 변경 간격(프레임 단위)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${className} flex w-full`}>
      {/* 인부1 */}
      <motion.div {...workersMotion}>
        <img
          src={`${LANDING_IMAGE_URL}workers1.svg`}
          style={{ display: isFirstFrame ? 'block' : 'none' }}
          alt="걷는 인부1"
          className={workersStyle}
        />
        <img
          src={`${LANDING_IMAGE_URL}workers3_01.svg`}
          style={{ display: isFirstFrame ? 'none' : 'block' }}
          alt="걷는 인부1"
          className={workersStyle}
        />
      </motion.div>

      {/* 인부2 */}
      <motion.div {...workersMotion}>
        <img
          src={`${LANDING_IMAGE_URL}workers2.svg`}
          style={{ display: isFirstFrame ? 'block' : 'none' }}
          alt="걷는 인부2"
          className={workersStyle}
        />
        <img
          src={`${LANDING_IMAGE_URL}workers1_01.svg`}
          style={{ display: isFirstFrame ? 'none' : 'block' }}
          alt="걷는 인부2"
          className={workersStyle}
        />
      </motion.div>

      {/* 인부3 */}
      <motion.div {...workersMotion}>
        <img
          src={`${LANDING_IMAGE_URL}workers3.svg`}
          style={{ display: isFirstFrame ? 'block' : 'none' }}
          alt="걷는 인부3"
          className={workersStyle}
        />
        <img
          src={`${LANDING_IMAGE_URL}workers2_01.svg`}
          style={{ display: isFirstFrame ? 'none' : 'block' }}
          alt="걷는 인부3"
          className={workersStyle}
        />
      </motion.div>
    </div>
  );
};

export default Workers;
