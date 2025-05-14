'use client';
import BestPostCard from '@/app/(board)/boards/_components/BestPostCard';
import { Post } from '@/utils/postMapper';

type BestPostListProps = {
  posts: Post[];
};

export default function BestPostList({ posts }: BestPostListProps) {
  return (
    <>
      <h3 className="text-xl-bold mb-14 text-slate-50">베스트 게시글</h3>
      <section className="tablet:grid-cols-2 laptop:grid-cols-3 laptop:gap-5 tablet:h-55 mb-10 grid h-full w-full grid-cols-1 items-center gap-5">
        {posts.map((post) => (
          <BestPostCard key={post.id} {...post} />
        ))}
      </section>
    </>
  );
}
