import { getGroupById } from '@/lib/apis/group';
import { getTaskListById } from '@/lib/apis/taskList';
import DateMenu from '@/app/(team)/team/[teamid]/tasklist/_components/DateMenu';
import ManageButton from '@/app/(team)/team/[teamid]/tasklist/_components/ManageButton';
import TaskListMenu from '@/app/(team)/team/[teamid]/tasklist/_components/TaskListMenu';
import TaskListSection from '@/app/(team)/team/[teamid]/tasklist/_components/TaskListSection';
import CreateTaskButton from '@/app/(team)/team/[teamid]/tasklist/_components/CreateTaskButton';

interface PageProps {
  params: { teamid: string };
  searchParams: { id: string; date: string };
}

export default async function TaskListPage({
  params,
  searchParams,
}: PageProps) {
  const groupId = Number(params.teamid);
  const selectedId = Number(searchParams.id);
  const selectedDate =
    searchParams.date ?? new Date().toISOString().slice(0, 10);

  const groupData = await getGroupById({ groupId });
  const taskListsData = groupData?.taskLists ?? [];
  const selectedTaskListData = await getTaskListById({
    groupId,
    taskListId: selectedId,
    date: selectedDate,
  });
  const tasksData = selectedTaskListData?.tasks ?? [];

  return (
    <div className="laptop:py-10 tablet:p-6 m-auto flex min-h-screen max-w-[1200px] flex-col gap-6 px-4 py-6">
      <h1 className="text-2lg-bold tablet:text-xl-bold">할 일</h1>
      <div className="tablet:gap-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <DateMenu date={selectedDate} />
          <ManageButton />
        </div>
        <div className="flex flex-col gap-4">
          <TaskListMenu items={taskListsData} selectedId={selectedId} />
          <TaskListSection items={tasksData} />
        </div>
      </div>
      <CreateTaskButton />
    </div>
  );
}
