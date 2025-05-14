import TeamBanner from '@/app/(team)/team/_components/TeamBanner';
import TaskListBarList from '@/app/(team)/team/_components/TaskListBarList';
import MemberList from '@/app/(team)/team/_components/MemberList';
import { cookies } from 'next/headers';
import { getGroupById } from '@/lib/apis/group';
import { notFound } from 'next/navigation';
import { teamItemWrapperStyle } from '@/app/(team)/team/_components/styles';

export default async function TeamPage({
  params,
}: {
  params: { teamid: string };
  searchParams: { taskListId: string; date: string };
}) {
  const userId = cookies().get('userId')?.value;
  const groupId = Number(params.teamid);

  const groupData = await getGroupById({ groupId });
  const taskListsData = groupData?.taskLists ?? [];
  const membersData = groupData?.members ?? [];

  if (!groupData) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col items-center p-6">
      <TeamBanner group={groupData} userId={Number(userId)} />

      {/* 할 일 목록 리스트 */}
      <div
        className={`${teamItemWrapperStyle} mt-6 mb-3 flex w-full justify-between truncate`}
      >
        <div className="flex items-center gap-2">
          <h1 className="lg-medium">할 일 목록</h1>
          <span className="text-lg-regular text-slate-500">
            ({taskListsData.length}개)
          </span>
        </div>
        <button className="text-md-regular text-green-700">
          + 새로운 목록 추가하기
        </button>
      </div>
      <TaskListBarList items={taskListsData} groupId={groupId} />

      {/* 리포트 배너 */}
      <div
        className={`${teamItemWrapperStyle} my-8 flex w-full justify-between truncate`}
      >
        <h1 className="lg-medium">리포트</h1>
      </div>

      {/* 멤버 리스트 */}
      <div
        className={`${teamItemWrapperStyle} flex w-full justify-between truncate`}
      >
        <div className="mb-3 flex items-center gap-2">
          <h1 className="lg-medium">멤버</h1>
          <span className="text-lg-regular text-slate-500">
            ({membersData.length}명)
          </span>
        </div>
        <button className="text-md-regular text-green-700">
          + 새로운 멤버 초대하기
        </button>
      </div>
      <MemberList
        items={membersData}
        group={groupData}
        userId={Number(userId)}
      />
    </div>
  );
}
