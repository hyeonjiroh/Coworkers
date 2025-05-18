'use client';
import MemberCard from '@/app/(team)/team/_components/MemberList/MemberCard';
import Pagination from '@/app/(team)/team/_components/TaskListBarList/Pagination';
import { useState, useEffect } from 'react';
import { GroupResponse, GroupMemberResponse } from '@/lib/apis/group/type';
import { deleteGroupMemberById } from '@/lib/apis/group';
import {
  memberListContainerStyle,
  memberListWrapperStyle,
} from '@/app/(team)/team/_components/MemberList/styles';
import { toast } from 'react-toastify';
import { TOAST_MESSAGES } from '@/constants/messages';

interface MemberListProps {
  group: GroupResponse;
  items: GroupMemberResponse[];
  userId: number;
}

const MemberList = ({ group, items, userId }: MemberListProps) => {
  const groupId = group.id;

  const [memberList, setMemberList] = useState(items);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  const totalPage = Math.ceil(memberList.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentItems = memberList.slice(startIndex, endIndex);

  const handleMemberDelete = async (memberId: number) => {
    try {
      await deleteGroupMemberById({ groupId, memberId, tag: ['group'] });
      setMemberList(
        (prev) => prev.filter((items) => items.userId !== memberId) // delete 함수에 전달하지 않은 id만 남김
      );
      toast.success(TOAST_MESSAGES.member.deleteSuccess);
    } catch (error) {
      console.error('멤버 삭제 실패', error);
      toast.error(TOAST_MESSAGES.member.deleteFail);
    }
  };

  // MOBILE: MemberCard 4개씩 표시
  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth >= 744 ? 6 : 4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.addEventListener('resize', handleResize);
  }, []);

  // 멤버 수 변경 시 페이지 즉시 반영
  useEffect(() => {
    const newTotalPage = Math.ceil(memberList.length / perPage);
    if (page > newTotalPage) {
      setPage(newTotalPage);
    }
  }, [memberList.length, perPage]);

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
            memberId={item.userId}
            userId={Number(userId)}
            profileImage={item.userImage}
            onDelete={handleMemberDelete}
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
