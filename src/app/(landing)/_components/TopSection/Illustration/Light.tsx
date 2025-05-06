import Image from 'next/image';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';

const Light = () => {
  return (
    /* 빛 일러스트 */
    <div className="absolute">
      <Image
        src={`${LANDING_IMAGE_URL}landing_light_l_01.png`}
        alt="PC 빛 일러스트"
        width={1920}
        height={1080}
        className="laptop:block top-0 hidden object-contain"
      />
      <Image
        src={`${LANDING_IMAGE_URL}landing_light_m_01.png`}
        alt="TABLET 빛 일러스트"
        width={1488}
        height={940}
        className="tablet:block laptop:hidden top-0 hidden object-contain"
      />
      <Image
        src={`${LANDING_IMAGE_URL}landing_light_s_01.png`}
        alt="MOBILE 빛 일러스트"
        width={1415}
        height={640}
        className="tablet:hidden top-0 block object-contain"
      />
    </div>
  );
};

export default Light;
