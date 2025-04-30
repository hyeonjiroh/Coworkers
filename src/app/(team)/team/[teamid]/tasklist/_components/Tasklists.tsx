import { GroupResponse } from '@/lib/apis/group/type';

export default function TaskLists({
  groupData,
}: {
  groupData: GroupResponse | null;
}) {
  return <div>{groupData?.taskLists?.[0]?.name}</div>;
}
