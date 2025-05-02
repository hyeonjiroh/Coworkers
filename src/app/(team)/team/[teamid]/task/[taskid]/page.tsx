interface PageProps {
  params: { teamid: string; taskid: string };
}

export default function TaskDetailPage({ params }: PageProps) {
  const groupId = Number(params.teamid);
  const taskId = Number(params.taskid);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div>{`${groupId} / ${taskId}`}</div>
    </div>
  );
}
