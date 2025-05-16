'use client';
import BestPostCard from '@/app/(board)/boards/_components/BestPostCard';
import { Post } from '@/utils/postMapper';

type BestPostListProps = {
  posts: Post[];
};

export default function BestPostList({ posts }: BestPostListProps) {
  return (
    <>
      <h3 className="tablet:text-xl-bold text-lg-bold laptop:mb-10 tablet:mb-8 mb-6 text-slate-50">
        베스트 게시글
      </h3>
      <section className="tablet:grid-cols-2 laptop:grid-cols-3 laptop:gap-5 grid grid-cols-1 items-center gap-4">
        {posts.map((post) => (
          <BestPostCard key={post.id} {...post} />
        ))}
      </section>
    </>
  );
}
