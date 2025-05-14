'use client';
import TaskListBar from '@/app/(team)/team/_components/TaskListBarList/TaskListBar';
import Pagination from '@/app/(team)/team/_components/TaskListBarList/Pagination';
import { useState } from 'react';
import { TaskListResponse } from '@/lib/apis/taskList/type';
import { listContainerStyle } from '@/app/(team)/team/_components/TaskListBarList/styles';

const perPage = 4;

const TaskListBarList = ({
  items,
  groupId,
}: {
  items: TaskListResponse[];
  groupId: number;
}) => {
  const [page, setPage] = useState(1);

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
    <div className={`${listContainerStyle}`}>
      <div className={`${listContainerStyle} gap-4`}>
        {currentItems.map((item, index) => (
          <TaskListBar
            key={item.id}
            {...item}
            id={item.id}
            name={item.name}
            index={index + startIndex}
            groupId={groupId}
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

export default TaskListBarList;
