import { formatDateToDots } from '@/utils/formatDate';

export function formatElapsedTime(dateString: string): string {
  const currentDate = new Date();
  const targetDate = new Date(dateString);
  const diff = currentDate.getTime() - targetDate.getTime();

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `${minutes}분 전`;
  }

  if (hours < 24) {
    return `${hours}시간 전`;
  }

  if (days < 7) {
    return `${days}일 전`;
  }

  return formatDateToDots(dateString).replace(/\.\s?/g, '.');
}
