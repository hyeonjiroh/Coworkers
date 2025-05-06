import Image from 'next/image';
import clsx from 'clsx';
import {
  boxGradientStyle,
  boxStyle,
  textStyle,
  imageSize,
  getFlexDirection,
} from '@/app/(landing)/_components/styles/boxStyle';
import { LandingBoxProps } from '@/app/(landing)/_components/type';

const LandingBox = ({
  imageSrc,
  imageAlt,
  imageOnTop,
  iconSrc,
  iconAlt,
  textLines,
  textLeft = true,
  tabletReverse = false,
  mobileReverse = false,
  gradient = false,
  className,
}: LandingBoxProps) => {
  const wrapperClass = gradient ? boxGradientStyle : ''; // 그라데이션 외곽선용
  const direction = getFlexDirection(tabletReverse, mobileReverse); // 아이템 정렬 순서 지정

  return (
    <div className={wrapperClass}>
      <div className={`${boxStyle} ${className}`}>
        {/* 아이템 컨테이너 */}
        <div
          className={clsx(
            'flex overflow-hidden',
            direction,
            'tablet:gap-25 laptop:gap-50 gap-10'
          )}
        >
          {/* 아이콘 & 텍스트 */}
          <div
            className={clsx(
              'flex flex-col justify-center gap-[16px]',
              textLeft ? 'items-start text-left' : 'items-end text-right'
            )}
          >
            <Image
              src={iconSrc}
              alt={`${iconAlt} 아이콘`}
              width={48}
              height={48}
            />
            <h1 className={textStyle}>
              {textLines[0]}
              <br />
              {textLines[1]}
            </h1>
          </div>
          {/* 이미지 */}
          <div
            className={clsx('flex', imageOnTop ? 'items-start' : 'items-end')}
          >
            <div className={imageSize}>
              <Image
                src={imageSrc}
                alt={`${imageAlt} 이미지`}
                fill
                className="absolute object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBox;
