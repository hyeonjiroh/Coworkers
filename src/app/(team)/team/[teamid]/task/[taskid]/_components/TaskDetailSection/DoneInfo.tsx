import IconRenderer from '@/components/common/Icons/IconRenderer';
import { formatDate } from '@/utils/formatDate';

export default function DoneInfo({ doneAt }: { doneAt: string | null }) {
  const doneDate = doneAt && formatDate(doneAt);

  return (
    <>
      {doneAt && (
        <div className="flex items-center gap-1.5">
          <IconRenderer
            name="CheckGreenIcon"
            size={16}
            className="!text-green-500"
          />
          <div className="text-xs-medium text-green-500">{doneDate} 완료</div>
        </div>
      )}
    </>
  );
}
