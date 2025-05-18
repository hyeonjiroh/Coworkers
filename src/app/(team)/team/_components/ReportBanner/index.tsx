'use client';
import CircularAllProgress from '@/app/(team)/team/_components/ReportBanner/CircularAllProgress';
import ReportCard from '@/app/(team)/team/_components/ReportBanner/ReportCard';
import {
  reportBannerContainerStyle,
  reportBannerItemWrapperStyle,
  circularProgressWrapperStyle,
  progressTextStyle,
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
        {/* 왼쪽 아이템 */}
        <div className="flex items-center justify-center gap-10">
          <div className={`${circularProgressWrapperStyle}`}>
            <CircularAllProgress percentage={progress} />
          </div>
          <div className="tablet:relative absolute flex flex-col gap-1">
            {/* TABLET 이상 표시 */}
            <p className="tablet:block text-md-medium hidden">
              오늘의
              <br />
              진행 상황
            </p>
            {/* MOBILE 이하 표시 */}
            <p className="tablet:hidden text-md-medium block text-center">
              오늘
            </p>
            <p className={`${progressTextStyle}`}>{progress}%</p>
          </div>
        </div>

        {/* 오른쪽 아이템 */}
        <div className={`${reportCardsWrapperStyle}`}>
          <ReportCard variant="todo" value={total - done} />
          <ReportCard variant="done" value={done} />
        </div>
      </div>
    </div>
  );
};
export default ReportBanner;
