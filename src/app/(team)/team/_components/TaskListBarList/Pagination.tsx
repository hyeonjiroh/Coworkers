import IconRenderer from '@/components/common/Icons/IconRenderer';
import { getButtonStyle } from '@/app/(team)/team/_components/styles';

interface PaginationProps {
  page: number;
  totalPage: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

const Pagination = ({
  page,
  totalPage,
  onPrev,
  onNext,
  className,
}: PaginationProps) => {
  const isPrevDisabled = page === 1;
  const isNextDisabled = page === totalPage;

  return (
    <div className={`flex items-center justify-end gap-2 ${className}`}>
      <button
        onClick={onPrev}
        disabled={isPrevDisabled}
        className={getButtonStyle(isPrevDisabled)}
      >
        <IconRenderer name="ArrowIcon" />
      </button>
      <span className="text-md-regular">
        {page} / {totalPage}
      </span>
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={getButtonStyle(isNextDisabled)}
      >
        <IconRenderer name="ArrowIcon" flip />
      </button>
    </div>
  );
};

export default Pagination;
