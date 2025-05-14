'use client';
import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
  paginate: (pageNumber: number) => void;
  className?: string;
};

export default function Pagination({
  currentPage,
  totalPosts,
  postsPerPage,
  paginate,
  className = 'mt-6 flex justify-center gap-2',
}: PaginationProps) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={className}>
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-md bg-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        이전
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`rounded-md px-4 py-2 ${
            currentPage === number
              ? 'bg-green-700 text-white'
              : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-md bg-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        다음
      </button>
    </div>
  );
}
