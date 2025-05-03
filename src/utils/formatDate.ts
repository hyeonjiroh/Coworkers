function getDateParts(dateString: string) {
  const date = new Date(dateString);

  return {
    date,
    year: date.getFullYear(),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    day: String(date.getDate()).padStart(2, '0'),
    dayOfWeek: ['일', '월', '화', '수', '목', '금', '토'][date.getDay()],
    hours: date.getHours(),
    minutes: String(date.getMinutes()).padStart(2, '0'),
  };
}

export function formatDateWithDay(dateString: string): string {
  const { year, month, day, dayOfWeek } = getDateParts(dateString);
  return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
}

export function formatDate(dateString: string): string {
  const { year, month, day } = getDateParts(dateString);
  return `${year}년 ${month}월 ${day}일`;
}

export function formatDateToDots(dateString: string): string {
  const { year, month, day } = getDateParts(dateString);
  return `${year}. ${month}. ${day}`;
}

export function formatTime(dateString: string): string {
  const { hours, minutes } = getDateParts(dateString);

  const period = hours < 12 ? '오전' : '오후';
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;

  return `${period} ${displayHour}:${minutes}`;
}
