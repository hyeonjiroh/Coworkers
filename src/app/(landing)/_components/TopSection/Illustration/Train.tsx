import { motion } from 'framer-motion';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';
import {
  trainWrapper,
  train1Style,
  train2Style,
  train3Style,
} from '@/app/(landing)/_components/styles/illustrationStyle';
import {
  trainMotion,
  trainReverseMotion,
} from '@/app/(landing)/_components/styles/motionStyle';

const Train = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} w-full`}>
      <div className={trainWrapper}>
        {/* 기차1 */}
        <motion.div
          {...trainReverseMotion}
          className="laptop:mb-10 tablet:mb-5 z-3 mb-5.5"
        >
          <img
            src={`${LANDING_IMAGE_URL}il_train_1.svg`}
            alt="기차 일러스트"
            className={train1Style}
          />
        </motion.div>

        {/* 기차2 */}
        <motion.div
          {...trainMotion}
          className="laptop:mb-6 tablet:mb-1.5 z-2 mb-2"
        >
          <img
            src={`${LANDING_IMAGE_URL}il_train_2.svg`}
            alt="기차 일러스트"
            className={train2Style}
          />
        </motion.div>

        {/* 기차3 */}
        <motion.div {...trainReverseMotion} className="z-1">
          <img
            src={`${LANDING_IMAGE_URL}il_train_3.svg`}
            alt="기차 일러스트"
            className={train3Style}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Train;
