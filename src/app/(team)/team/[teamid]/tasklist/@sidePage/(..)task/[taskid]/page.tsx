import TaskDetailPage from '@/app/(team)/team/[teamid]/task/[taskid]/page';
import Background from '@/app/(team)/team/[teamid]/tasklist/@sidePage/(..)task/[taskid]/_components/Background';
import CloseButton from '@/app/(team)/team/[teamid]/tasklist/@sidePage/(..)task/[taskid]/_components/CloseButton';
import ExpansionButton from '@/app/(team)/team/[teamid]/tasklist/@sidePage/(..)task/[taskid]/_components/ExpansionButton';

interface PageProps {
  params: { taskid: string };
}

export default function Page(props: PageProps) {
  const isSidePageOpen = Boolean(props.params.taskid);

  return (
    <>
      <Background isSidePageOpen={isSidePageOpen} />
      <div className="tablet:px-10 tablet:w-3/5 tablet:min-w-[435px] fixed top-0 right-0 z-70 flex max-h-screen min-h-screen min-w-screen flex-col gap-4 border-l border-slate-50/10 bg-slate-800 px-6">
        <div className="tablet:pt-10 flex gap-4 pt-6">
          <CloseButton />
          <ExpansionButton />
        </div>
        <div className="tablet:pb-10 scrollbar-hide flex-1 overflow-y-auto pb-6">
          <TaskDetailPage {...props} />
        </div>
      </div>
    </>
  );
}
