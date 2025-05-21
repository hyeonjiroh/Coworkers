import DropDown from '@/components/common/Dropdown';

interface FrequencyTypeSelectorProps {
  frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  setFrequencyType: (
    frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY'
  ) => void;
}

const FrequencyText = {
  ONCE: '반복 안 함',
  DAILY: '매일',
  WEEKLY: '주 반복',
  MONTHLY: '월 반복',
};

export default function FrequencyTypeSelector({
  frequencyType,
  setFrequencyType,
}: FrequencyTypeSelectorProps) {
  return (
    <div>
      <DropDown>
        <DropDown.Trigger
          showIcon
          className="text-lg-medium! w-[120px] bg-[#18212F] px-[10px] py-2 text-slate-500"
        >
          {FrequencyText[frequencyType]}
        </DropDown.Trigger>
        <DropDown.Menu className="text-lg-regular! w-[120px] text-slate-50">
          <DropDown.Item onClick={() => setFrequencyType('ONCE')}>
            {FrequencyText['ONCE']}
          </DropDown.Item>
          <DropDown.Item onClick={() => setFrequencyType('DAILY')}>
            {FrequencyText['DAILY']}
          </DropDown.Item>
          <DropDown.Item onClick={() => setFrequencyType('WEEKLY')}>
            {FrequencyText['WEEKLY']}
          </DropDown.Item>
          <DropDown.Item onClick={() => setFrequencyType('MONTHLY')}>
            {FrequencyText['MONTHLY']}
          </DropDown.Item>
        </DropDown.Menu>
      </DropDown>
    </div>
  );
}
