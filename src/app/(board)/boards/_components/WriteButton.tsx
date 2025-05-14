import Button from '@/components/common/Button';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function WriteButton() {
  return (
    <Link href={ROUTES.ARTICLE_ADD}>
      <div className="laptop:right-30 laptop:bottom-6 tablet:bottom-10 tablet:right-5 fixed right-5 bottom-10 min-w-[104px]">
        <Button
          variant="floating"
          styleType="default"
          radius="lg"
          size="lg"
          className="w-full"
          startIcon="plus"
        >
          글쓰기
        </Button>
      </div>
    </Link>
  );
}
