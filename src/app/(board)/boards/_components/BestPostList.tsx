'use client';
import BestPostCard from '@/app/(board)/boards/_components/BestPostCard';
import { Post } from '@/utils/postMapper';

type BestPostListProps = {
  posts: Post[];
};

export default function BestPostList({ posts }: BestPostListProps) {
  return (
    <section className="tablet:grid-cols-2 laptop:grid-cols-3 laptop:gap-5 grid grid-cols-1 items-center gap-4">
      {posts.map((post) => (
        <BestPostCard key={post.id} {...post} />
      ))}
    </section>
  );
}
