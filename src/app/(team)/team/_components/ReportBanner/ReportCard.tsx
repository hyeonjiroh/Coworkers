import Image from 'next/image';
import AnimatedFaceIcon from '@/app/(team)/team/_components/ReportBanner/AnimatedFaceIcon';
import {
  reportCardContainerStyle,
  cardItemWrapperStyle,
} from '@/app/(team)/team/_components/ReportBanner/styles';

interface ReportCardProps {
  variant: 'todo' | 'done';
  value: number;
}

const ReportCard = ({ variant, value }: ReportCardProps) => {
  return (
    <div className={`${reportCardContainerStyle}`}>
      <div className={`${cardItemWrapperStyle}`}>
        {/* 텍스트 */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xs-medium text-slate-300">
            {variant === 'todo' ? '오늘의 할 일' : '한 일'}
          </h3>
          <p className="text-2xl-bold text-green-500">{value}개</p>
        </div>

        {/* 아이콘 */}
        {variant === 'todo' ? (
          <AnimatedFaceIcon />
        ) : (
          <Image
            src="/image/team_done.svg"
            alt="done 표지판 일러스트 아이콘"
            width={40}
            height={40}
          />
        )}
      </div>
    </div>
  );
};

export default ReportCard;
