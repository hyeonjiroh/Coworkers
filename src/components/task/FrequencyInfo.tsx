import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function FrequencyInfo({
  frequency,
}: {
  frequency: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
}) {
  const frequencyText: Record<string, string> = {
    DAILY: '매일 반복',
    WEEKLY: '매주 반복',
    MONTHLY: '매월 반복',
  };

  return (
    <div className="flex items-center gap-2.5">
      {frequency !== 'ONCE' && (
        <>
          <div className="h-2 w-px bg-slate-700" />
          <div className="flex items-center gap-1.5">
            <IconRenderer name="RepeatIcon" size={16} />
            <div className="text-xs-regular text-slate-500">
              {frequencyText[frequency]}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
