'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';
import { workersStyle } from '@/app/(landing)/_components/styles/illustrationStyle';
import { useIsMobile } from '@/hooks/useCheckViewport';

const Workers = ({ className }: { className?: string }) => {
  const [isFirstFrame, setIsFirstFrame] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstFrame((prev) => !prev);
    }, 500); // 이미지 변경 간격

    return () => clearInterval(interval);
  }, []);

  const workersMotion = {
    initial: { x: 0 },
    whileInView: { x: isMobile ? 80 : 200, y: [0, 5, 0] },
    transition: {
      x: {
        duration: 2,
        ease: 'easeOut',
      },
      y: {
        duration: 0.7,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <div className={`${className} flex w-full`}>
      {/* 인부1 */}
      <motion.div {...workersMotion}>
        <img
          src={`${LANDING_IMAGE_URL}il_workers1.svg`}
          style={{ display: isFirstFrame ? 'block' : 'none' }}
          alt="걷는 인부1"
          className={workersStyle}
        />
        <img
          src={`${LANDING_IMAGE_URL}il_workers3_01.svg`}
          style={{ display: isFirstFrame ? 'none' : 'block' }}
          alt="걷는 인부1"
          className={workersStyle}
        />
      </motion.div>

      {/* 인부2 */}
      <motion.div {...workersMotion}>
        <img
          src={`${LANDING_IMAGE_URL}il_workers2.svg`}
          style={{ display: isFirstFrame ? 'block' : 'none' }}
          alt="걷는 인부2"
          className={workersStyle}
        />
        <img
          src={`${LANDING_IMAGE_URL}il_workers1_01.svg`}
          style={{ display: isFirstFrame ? 'none' : 'block' }}
          alt="걷는 인부2"
          className={workersStyle}
        />
      </motion.div>

      {/* 인부3 */}
      <motion.div {...workersMotion}>
        <img
          src={`${LANDING_IMAGE_URL}il_workers3.svg`}
          style={{ display: isFirstFrame ? 'block' : 'none' }}
          alt="걷는 인부3"
          className={workersStyle}
        />
        <img
          src={`${LANDING_IMAGE_URL}il_workers2_01.svg`}
          style={{ display: isFirstFrame ? 'none' : 'block' }}
          alt="걷는 인부3"
          className={workersStyle}
        />
      </motion.div>
    </div>
  );
};

export default Workers;
