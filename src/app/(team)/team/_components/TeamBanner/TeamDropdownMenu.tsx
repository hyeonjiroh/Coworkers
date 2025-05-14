import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import DropDown from '@/components/common/Dropdown';
import IconRenderer from '@/components/common/Icons/IconRenderer';

const TeamDropdownMenu = ({ group }: { group: { id: number } }) => {
  const router = useRouter();

  return (
    <DropDown>
      <DropDown.Trigger className="mb-0">
        <IconRenderer name="GearIcon" className="cursor-pointer" />
      </DropDown.Trigger>
      <DropDown.Menu align="right" className="mt-2 h-[80px] w-[120px]">
        <DropDown.Item
          onClick={() => router.push(ROUTES.TEAM_EDIT(group.id))}
          className="text-md-regular h-[39px] w-full"
        >
          수정하기
        </DropDown.Item>
        <DropDown.Item
          onClick={() => router.push(ROUTES.TEAM_EDIT(group.id))}
          className="text-md-regular h-[39px] w-full"
        >
          삭제하기
        </DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
};

export default TeamDropdownMenu;
