import MyHistoryPageContent from '@/app/(user)/myhistory/_components/MyHistoryPageContent';
import { getUserHistory } from '@/lib/apis/user';

export default async function MyHistoryPage() {
  const userHistoryData = await getUserHistory({ tag: ['task'] });

  return userHistoryData && <MyHistoryPageContent {...userHistoryData} />;
}
