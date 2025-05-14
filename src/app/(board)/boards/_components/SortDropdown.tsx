'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DropDown from '@/components/common/Dropdown';

export default function SortDropdownArea() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSort = searchParams.get('orderBy');
  const validSort = initialSort === 'like' ? 'like' : 'recent';
  const [sort, setSort] = useState<'recent' | 'like'>(validSort);
  const [dropdownKey, setDropdownKey] = useState(0);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('orderBy', sort);
    router.push(`/boards?${newSearchParams.toString()}`);
  }, [sort, router, searchParams]);

  const handleSelect = (option: string) => {
    const newSort = option === '최신순' ? 'recent' : 'like';
    setSort(newSort);
    setDropdownKey((prev) => prev + 1);
  };

  return (
    <div className="mb-8 flex items-center justify-between">
      <h3 className="text-xl-bold text-slate-50">게시글</h3>
      <DropDown key={dropdownKey}>
        <DropDown.Trigger
          showIcon
          className="h-11 w-[120px] bg-slate-700 px-4 py-2"
          placeholder="최신순"
        >
          {sort === 'recent' ? '최신순' : '좋아요순'}
        </DropDown.Trigger>
        <DropDown.Menu className="w-[120px]">
          <DropDown.Item onClick={() => handleSelect('최신순')}>
            최신순
          </DropDown.Item>
          <DropDown.Item onClick={() => handleSelect('좋아요순')}>
            좋아요 많은순
          </DropDown.Item>
        </DropDown.Menu>
      </DropDown>
    </div>
  );
}
