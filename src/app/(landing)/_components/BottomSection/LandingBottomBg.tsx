import Image from 'next/image';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';

const LandingBottomBg = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      {/* 격자 패턴 배경 */}
      <Image
        src={`${LANDING_IMAGE_URL}bg_bottom_l.png`}
        alt="PC 격자 패턴 이미지"
        width={1920}
        height={1080}
        className="laptop:block hidden object-none"
      />
      <Image
        src={`${LANDING_IMAGE_URL}bg_bottom_m.png`}
        alt="TABLET 격자 패턴 이미지"
        width={744}
        height={940}
        className="tablet:block laptop:hidden hidden object-none"
      />
      <Image
        src={`${LANDING_IMAGE_URL}bg_bottom_s.png`}
        alt="MOBILE 격자 패턴 이미지"
        width={375}
        height={640}
        className="tablet:hidden block object-none"
      />
    </div>
  );
};

export default LandingBottomBg;
