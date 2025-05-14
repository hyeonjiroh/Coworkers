//검색 기능
'use client';
import { useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface UseSearchPostsReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (query: string) => void;
}

export function useSearchPosts(initialQuery: string): UseSearchPostsReturn {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      const newParams = new URLSearchParams(searchParams.toString());
      if (query) {
        newParams.set('keyword', query);
        newParams.set('page', '1');
      } else {
        newParams.delete('keyword');
      }
      router.push(`/boards?${newParams.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
  };
}
