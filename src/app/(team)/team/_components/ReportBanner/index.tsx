'use client';
import ReportCard from '@/app/(team)/team/_components/ReportBanner/ReportCard';
import {
  reportBannerContainerStyle,
  reportBannerItemWrapperStyle,
  progressPercentStyle,
  reportCardsWrapperStyle,
} from '@/app/(team)/team/_components/ReportBanner/styles';

interface ReportBannerProps {
  progress: number;
  total: number;
  done: number;
}

const ReportBanner = ({ progress, total, done }: ReportBannerProps) => {
  return (
    <div className={`${reportBannerContainerStyle}`}>
      <div className={`${reportBannerItemWrapperStyle}`}>
        <div className="flex items-center justify-center gap-10">
          {/* 임시 원형 아이콘 */}
          <div className="tablet:h-[140px] tablet:w-[140px] tablet:border-[30px] relative h-[120px] w-[120px] rounded-full border-[24px] border-green-700" />
          {/* progress text wrapper */}
          <div className="tablet:relative absolute flex flex-col gap-1">
            {/* TABLET 이상 */}
            <p className="tablet:block text-md-medium hidden">
              오늘의
              <br />
              진행 상황
            </p>
            {/* MOBILE */}
            <p className="tablet:hidden text-md-medium block text-center">
              오늘
            </p>
            <p className={`${progressPercentStyle}`}>{progress}%</p>
          </div>
        </div>

        {/* todo & done Card */}
        <div className={`${reportCardsWrapperStyle}`}>
          <ReportCard variant="todo" value={total - done} />
          <ReportCard variant="done" value={done} />
        </div>
      </div>
    </div>
  );
};
export default ReportBanner;
