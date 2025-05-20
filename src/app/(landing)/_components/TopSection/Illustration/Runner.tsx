import Image from 'next/image';
import { motion } from 'framer-motion';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';
import { runnerStyle } from '@/app/(landing)/_components/styles/illustrationStyle';
import { runnerMotion } from '@/app/(landing)/_components/styles/motionStyle';

const Runner = ({ className }: { className?: string }) => {
  return (
    <motion.div {...runnerMotion} className={`${className} ${runnerStyle}`}>
      <Image
        src={`${LANDING_IMAGE_URL}il_runner.svg`}
        alt="인부 일러스트"
        fill
        className="object-contain"
      />
    </motion.div>
  );
};

export default Runner;
