'use client';
import { useSearchParams } from 'next/navigation';
import { useSearchPosts } from '@/app/(board)/boards/_hooks/useSearchPosts';
import { useBestPosts } from '@/app/(board)/boards/_hooks/useBestPosts';
import { usePosts } from '@/app/(board)/boards/_hooks/usePosts';
import SearchInput from '@/app/(board)/boards/_components/SearchInput';
import BestPostList from '@/app/(board)/boards/_components/BestPostList';
import SortDropdown from '@/app/(board)/boards/_components/SortDropdown';
import PostList from '@/app/(board)/boards/_components/PostList';
import WriteButton from '@/app/(board)/boards/_components/WriteButton';
import Pagination from '@/app/(board)/boards/_components/BoardPagination';

export default function BoardContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('keyword') || '';
  const initialPage = parseInt(searchParams.get('page') || '1', 10);
  const initialOrder =
    (searchParams.get('orderBy') as 'recent' | 'like') || 'recent';

  const { searchQuery, handleSearch } = useSearchPosts(initialQuery);
  const { bestPosts, isBestLoading, error: bestError } = useBestPosts();
  const {
    filteredPosts,
    totalPosts,
    currentPage,
    paginate,
    deletePost,
    isPostsLoading,
    error: postsError,
  } = usePosts(searchQuery, initialPage, initialOrder);

  const POSTS_PER_PAGE = 10;
  const error = bestError || postsError;

  return (
    <>
      {/* Search Section */}
      <SearchInput onSearch={handleSearch} />
      {error && <div className="py-10 text-center text-red-500">{error}</div>}

      {/* Best Article Section */}
      <h3 className="tablet:text-xl-bold text-lg-bold laptop:mb-10 tablet:mb-8 mb-6 text-slate-50">
        베스트 게시글
      </h3>
      {isBestLoading ? (
        <div className="py-10 text-center text-slate-400">로딩 중...</div>
      ) : (
        <BestPostList posts={bestPosts} />
      )}

      <div className="tablet:my-10 my-8 border border-slate-50/10"></div>

      {/* All Article Section */}
      <div className="tablet:h-11 tablet:mb-8 mb-6 flex h-10 items-center justify-between">
        <h3 className="tablet:text-xl-bold text-lg-bold text-slate-50">
          게시글
        </h3>
        <SortDropdown />
      </div>
      {isPostsLoading ? (
        <div className="py-10 text-center text-slate-400">로딩 중...</div>
      ) : filteredPosts.length === 0 && searchQuery ? (
        <div className="py-10 text-center text-slate-400">
          <p>
            <strong className="text-green-700">{searchQuery}</strong>에 해당하는
            게시글을 찾을 수 없습니다.
          </p>
        </div>
      ) : (
        <>
          <PostList posts={filteredPosts} deletePost={deletePost} />
          <Pagination
            currentPage={currentPage}
            totalPosts={totalPosts}
            postsPerPage={POSTS_PER_PAGE}
            paginate={paginate}
          />
        </>
      )}
      <WriteButton />
    </>
  );
}
