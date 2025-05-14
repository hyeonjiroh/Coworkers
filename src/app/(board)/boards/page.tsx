import { Suspense } from 'react';
import BoardContent from '@/app/(board)/boards/_components/BoardContent';

export default function BoardsPage() {
  return (
    <div className="h-100vh tablet:px-6 laptop:max-w-[1200px] relative m-auto my-10 flex flex-col px-6">
      <h2 className="text-2xl-bold mb-10 text-slate-50">자유게시판</h2>
      <Suspense
        fallback={
          <div className="py-10 text-center text-slate-400">로딩 중...</div>
        }
      >
        <BoardContent />
      </Suspense>
    </div>
  );
}
