import Image from 'next/image';
import clsx from 'clsx';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';

const LandingTopBg = ({ className }: { className?: string }) => {
  return (
    /* 격자 패턴 배경 */
    <div
      className={clsx(
        className,
        'w-full min-w-0',
        'laptop:max-w-full laptop:max-h-[940px]',
        'tablet:max-w-[744px] tablet:max-h-[750px]',
        'max-h-[550px] max-w-[375px]'
      )}
    >
      <Image
        src={`${LANDING_IMAGE_URL}landing_top_pattern_l.png`}
        alt="PC 격자 패턴 일러스트"
        width={1920}
        height={1080}
        className="laptop:block top-0 hidden object-contain"
      />
      <Image
        src={`${LANDING_IMAGE_URL}landing_top_pattern_m.png`}
        alt="TABLET 격자 패턴 일러스트"
        width={744}
        height={940}
        className="tablet:block laptop:hidden top-0 hidden object-contain"
      />
      <Image
        src={`${LANDING_IMAGE_URL}landing_top_pattern_s.png`}
        alt="MOBILE 격자 패턴 일러스트"
        width={375}
        height={640}
        className="tablet:hidden top-0 block object-contain"
      />
    </div>
  );
};

export default LandingTopBg;
