import { getGroupById } from '@/lib/apis/group';
import TaskLists from '@/app/(team)/team/[teamid]/tasklist/_components/Tasklists';
import Button from '@/components/common/Button';

interface Props {
  params: {
    teamid: string;
  };
}

export default async function TaskListPage({ params }: Props) {
  const groupId = Number(params.teamid);

  const groupData = await getGroupById({ groupId });

  return (
    <div className="laptop:py-10 tablet:p-6 text-2lg-bold tablet:text-xl-bold max-w-[1200px] px-4 py-6">
      <div>할 일</div>
      <TaskLists groupData={groupData} />
      <Button
        variant="primary"
        styleType="filled"
        className="w-full"
        radius="sm"
        size="lg"
      >
        버튼
      </Button>
    </div>
  );
}
