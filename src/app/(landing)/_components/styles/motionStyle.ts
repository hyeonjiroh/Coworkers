import type { HTMLMotionProps } from 'framer-motion';

const DELAY_TIME = 0.8;

// 📌 공용 motion //
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

// 📌 Top Section //

// Train.tsx 기차 회전
export const trainMotion: Pick<
  HTMLMotionProps<'div'>,
  'animate' | 'transition'
> = {
  animate: { rotate: [0, 5, 0] },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'reverse',
    delay: DELAY_TIME,
  },
};

// Train.tsx 기차 역회전
export const trainReverseMotion: Pick<
  HTMLMotionProps<'div'>,
  'animate' | 'transition'
> = {
  animate: { rotate: [0, -5, 0] },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'reverse',
    delay: DELAY_TIME,
  },
};

// Smoke.tsx 흙먼지 일렁임
export const smokeMotion: Pick<
  HTMLMotionProps<'div'>,
  'initial' | 'animate' | 'transition'
> = {
  initial: { opacity: 0.5, scale: 0.95 },
  animate: { opacity: 1, scale: 1, x: [0, -8, 0] },
  transition: {
    duration: 1,
    ease: 'easeOut',
    repeat: Infinity,
    repeatType: 'reverse',
    delay: DELAY_TIME,
  },
};

// Runner.tsx 인부 달리기
export const runnerMotion: Pick<
  HTMLMotionProps<'div'>,
  'animate' | 'transition'
> = {
  animate: { x: [0, -8, 0] },
  transition: {
    duration: 1,
    ease: 'easeOut',
    repeat: Infinity,
    repeatType: 'reverse',
    delay: DELAY_TIME,
  },
};

// 📌 Bottom Section //

// Workers.tsx 인부들 걷기
export const workersMotion = {
  initial: { left: 0 },
  animate: { x: 150, y: [0, 5, 0] },
  transition: {
    x: {
      duration: 1.5,
      ease: 'easeOut',
      repeat: Infinity,
    },
    y: {
      duration: 0.7,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};
