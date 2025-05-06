import Image from 'next/image';
import { motion } from 'framer-motion';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';
import { smokeStyle } from '@/app/(landing)/_components/styles/illustrationStyle';
import { smokeMotion } from '@/app/(landing)/_components/styles/motionStyle';

const Smoke = ({ className }: { className?: string }) => {
  return (
    <motion.div {...smokeMotion} className={`${className} ${smokeStyle}`}>
      <Image
        src={`${LANDING_IMAGE_URL}smoke.svg`}
        alt="흙먼지"
        fill
        className="object-contain"
      />
    </motion.div>
  );
};

export default Smoke;
