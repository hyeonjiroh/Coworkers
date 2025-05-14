'use client';
import MemberCard from '@/app/(team)/team/_components/MemberList/MemberCard';
import Pagination from '@/app/(team)/team/_components/TaskListBarList/Pagination';
import { useState, useEffect } from 'react';
import { GroupResponse, GroupMemberResponse } from '@/lib/apis/group/type';
import {
  memberListContainerStyle,
  memberListWrapperStyle,
} from '@/app/(team)/team/_components/MemberList/styles';

interface MemberListProps {
  items: GroupMemberResponse[];
  group: GroupResponse;
  userId: number;
}

const MemberList = ({ items, group, userId }: MemberListProps) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth >= 744 ? 6 : 4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.addEventListener('resize', handleResize);
  }, []);

  const totalPage = Math.ceil(items.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPage) setPage((prev) => prev + 1);
  };

  return (
    <div className={`${memberListContainerStyle}`}>
      <div className={`${memberListWrapperStyle}`}>
        {currentItems.map((item) => (
          <MemberCard
            key={item.userId}
            {...item}
            group={group}
            name={item.userName}
            email={item.userEmail}
            userId={Number(userId)}
            userImage={item.userImage}
          />
        ))}
      </div>

      {totalPage > 1 && (
        <Pagination
          page={page}
          totalPage={totalPage}
          onPrev={handlePrev}
          onNext={handleNext}
          className="mt-2"
        />
      )}
    </div>
  );
};

export default MemberList;
