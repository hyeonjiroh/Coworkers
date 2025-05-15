'use client';

import React, { useEffect, useState } from 'react';
import { getUserHistory } from '@/lib/apis/user';
import { groupByDate } from '@/utils/groupByDate';
import MyHistorySection from './_components/MyHistorySection';
import { TaskResponse } from '@/lib/apis/task/type';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Pagination from '@/app/(board)/boards/_components/BoardPagination';

type RangeType = 'all' | '1m' | '3m' | 'custom';

// export default function MyHistoryPageWrapper() {
//   return <MyHistoryPageClient />;
// }

export default function MyHistoryPageClient() {
  const [currentRange, setCurrentRange] = useState<RangeType>('all');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [grouped, setGrouped] = useState<
    Record<string, { display: string; items: TaskResponse[] }>
  >({});
  const [sortedDates, setSortedDates] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    async function fetchHistory() {
      const res = await getUserHistory({ tag: ['user-history'] });
      if (!res || !res.tasksDone) return;

      const groupedData = groupByDate(res.tasksDone);
      const sorted = Object.keys(groupedData).sort(
        (a, b) => new Date(b).getTime() - new Date(a).getTime()
      );

      setGrouped(groupedData);
      setSortedDates(sorted);
    }

    fetchHistory();
  }, []);

  const now = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(now.getMonth() - 3);

  const filteredDates = sortedDates.filter((isoDate) => {
    const date = new Date(isoDate);
    if (currentRange === '1m') return date >= oneMonthAgo;
    if (currentRange === '3m') return date >= threeMonthsAgo;
    if (currentRange === 'custom' && startDate && endDate) {
      return date >= startDate && date <= endDate;
    }
    return true;
  });

  const paginatedDates = filteredDates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const tabs: { key: RangeType; label: string }[] = [
    { key: 'all', label: '전체' },
    { key: '1m', label: '최근 1개월' },
    { key: '3m', label: '최근 3개월' },
    { key: 'custom', label: '사용자 지정' },
  ];

  return (
    <main className="laptop:py-10 tablet:p-6 relative min-h-[calc(100vh-60px)] px-4 py-6">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-xl-bold mb-6 text-white">마이 히스토리</h1>

        {/* 탭 메뉴 */}
        <div className="mb-6 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setCurrentRange(tab.key);
                setCurrentPage(1);
              }}
              className={`text-md-medium rounded px-3 py-1.5 text-white hover:bg-slate-700 ${
                currentRange === tab.key
                  ? 'bg-slate-700 font-bold'
                  : 'bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}

          {/* 사용자 지정 날짜 */}
          {currentRange === 'custom' && (
            <div className="flex items-center gap-2">
              <DatePicker
                selected={startDate}
                onChange={setStartDate}
                selectsStart
                startDate={startDate ?? undefined}
                endDate={endDate ?? undefined}
                placeholderText="시작일"
                className="rounded bg-slate-800 px-2 py-1 text-white"
              />
              <span className="text-white">~</span>
              <DatePicker
                selected={endDate}
                onChange={setEndDate}
                selectsEnd
                startDate={startDate ?? undefined}
                endDate={endDate ?? undefined}
                minDate={startDate ?? undefined}
                placeholderText="종료일"
                className="rounded bg-slate-800 px-2 py-1 text-white"
              />
            </div>
          )}
        </div>

        {/* 날짜별 히스토리 출력 */}
        <div className="flex flex-col gap-10">
          {paginatedDates.length === 0 ? (
            <div className="text-md-medium absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-center text-slate-500">
              <p>아직 히스토리가 없습니다.</p>
              <p>완료된 할 일이 이곳에 표시됩니다.</p>
            </div>
          ) : (
            paginatedDates.map((isoDate) => {
              const { display, items } = grouped[isoDate];
              return (
                <section key={isoDate} className="flex flex-col gap-4">
                  <h2 className="text-lg-bold text-white">{display}</h2>
                  <MyHistorySection items={items} />
                </section>
              );
            })
          )}

          {/* Pagination 컴포넌트 */}
          {filteredDates.length > itemsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPosts={filteredDates.length}
              postsPerPage={itemsPerPage}
              paginate={(page) => setCurrentPage(page)}
            />
          )}
        </div>
      </div>
    </main>
  );
}
