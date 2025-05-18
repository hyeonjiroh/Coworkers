'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedFaceIcon = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const animation = {
    y: [0, -8, 0, -6, 0],
    rotate: [0, -10, 0, 10, 0],
  };

  return (
    <motion.div
      animate={!hasAnimated ? animation : undefined}
      transition={
        hasAnimated
          ? undefined
          : { duration: 0.8, delay: 0.8, ease: 'easeInOut' }
      }
      whileHover={{
        ...animation,
        transition: {
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        },
      }}
      onAnimationComplete={() => setHasAnimated(true)}
    >
      <Image
        src="/image/default_card.svg"
        alt="인부 얼굴 일러스트 아이콘"
        width={40}
        height={40}
      />
    </motion.div>
  );
};

export default AnimatedFaceIcon;
