import { Suspense } from 'react';
import BoardContent from '@/app/(board)/boards/_components/BoardContent';

export default function BoardsPage() {
  return (
    <div className="h-100vh tablet:px-6 tablet:py-10 laptop:max-w-[1200px] relative m-auto flex flex-col px-4 py-8">
      <h2 className="tablet:text-2xl-bold text-2lg-bold laptop:mb-10 tablet:mb-8 mb-6 text-slate-50">
        자유게시판
      </h2>
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
