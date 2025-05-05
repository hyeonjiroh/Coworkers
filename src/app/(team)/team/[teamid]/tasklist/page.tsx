import { cookies } from 'next/headers';
import { getGroupById } from '@/lib/apis/group';
import { getTaskListById } from '@/lib/apis/taskList';
import DateMenu from '@/app/(team)/team/[teamid]/tasklist/_components/DateMenu';
import TaskListMenu from '@/components/tasklist/TaskListMenu';
import TaskListTabs from '@/app/(team)/team/[teamid]/tasklist/_components/TaskListTabs';
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
  const userId = cookies().get('userId')?.value;

  const groupId = Number(params.teamid);
  const selectedId = Number(searchParams.id);
  const selectedDate = searchParams.date;

  const groupData = await getGroupById({ groupId });
  const taskListsData = groupData?.taskLists ?? [];
  const membersData = groupData?.members ?? [];
  const selectedTaskListData = await getTaskListById({
    taskListId: selectedId,
    date: selectedDate,
  });
  const tasksData = selectedTaskListData?.tasks ?? [];

  const isTaskListEmpty = Boolean(taskListsData.length === 0);
  const isTaskEmpty = Boolean(tasksData.length === 0);

  return (
    <div className="m-auto flex max-w-[1200px] flex-col gap-6">
      <h1 className="text-2lg-bold tablet:text-xl-bold">할 일</h1>
      <div className="tablet:gap-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <DateMenu date={selectedDate} />
          <TaskListMenu
            membersData={membersData}
            userId={Number(userId)}
            size="md"
          />
        </div>
        {isTaskListEmpty && (
          <div className="text-md-medium absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-center text-slate-500">
            <p>아직 할 일 목록이 없습니다.</p>
            <p>새로운 목록을 추가해주세요.</p>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <TaskListTabs items={taskListsData} selectedId={selectedId} />
          {!isTaskListEmpty && isTaskEmpty && (
            <div className="text-md-medium absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-center text-slate-500">
              <p>아직 할 일이 없습니다.</p>
              <p>할 일을 추가해보세요.</p>
            </div>
          )}
          <TaskListSection items={tasksData} />
        </div>
      </div>
      <CreateTaskButton />
    </div>
  );
}
