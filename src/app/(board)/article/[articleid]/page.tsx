import { cookies } from 'next/headers';
import { getArticleById } from '@/lib/apis/article';
import ArticleDetailSection from '@/app/(board)/article/[articleid]/ArticleDetailSection';
import ArticleCommentSection from '@/app/(board)/article/[articleid]/ArticleCommentSection';

interface PageProps {
  params: { articleid: string };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const userId = cookies().get('userId')?.value;
  const articleId = Number(params.articleid);

  const articleData = await getArticleById({ articleId, tag: ['article'] });

  return (
    <div className="tablet:px-6 tablet:py-14 relative px-4 py-10">
      <div className="m-auto flex max-w-[1200px] flex-col gap-10">
        {articleData && (
          <ArticleDetailSection {...articleData} userId={Number(userId)} />
        )}
        <ArticleCommentSection />
      </div>
    </div>
  );
}
