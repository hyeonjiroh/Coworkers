import Image from 'next/image';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';

const Light = () => {
  return (
    /* 빛 일러스트 */
    <div className="absolute">
      <Image
        src={`${LANDING_IMAGE_URL}il_light_l.png`}
        alt="PC 빛 일러스트"
        width={1920}
        height={1080}
        className="laptop:block top-0 hidden object-contain"
        priority
      />
      <Image
        src={`${LANDING_IMAGE_URL}il_light_m.png`}
        alt="TABLET 빛 일러스트"
        width={1488}
        height={940}
        className="tablet:block laptop:hidden top-0 hidden object-contain"
      />
      <Image
        src={`${LANDING_IMAGE_URL}il_light_s.png`}
        alt="MOBILE 빛 일러스트"
        width={1345}
        height={550}
        className="tablet:hidden top-0 block object-contain"
      />
    </div>
  );
};

export default Light;
