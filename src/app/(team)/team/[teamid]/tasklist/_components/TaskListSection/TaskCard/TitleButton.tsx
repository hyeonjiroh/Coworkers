'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

export default function TitleButton({
  name,
  id,
  doneAt,
}: {
  name: string;
  id: number;
  doneAt: string | null;
}) {
  const params = useParams();
  const teamId = params?.teamid;

  return (
    <Link
      href={`/team/${teamId}/task/${id}`}
      className={clsx(
        'text-md-regular tablet:max-w-[320px] max-w-[180px] truncate',
        doneAt && 'line-through'
      )}
      scroll={false}
    >
      {name}
    </Link>
  );
}
