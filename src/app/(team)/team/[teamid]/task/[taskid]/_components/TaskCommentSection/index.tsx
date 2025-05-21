'use client';

import { useState } from 'react';
import { CommentResponse } from '@/lib/apis/comment/type';
import TaskCommentCard from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentCard';
import TaskCommentInput from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentInput';
import EditableTaskCommentCard from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/EditableTaskCommentCard';

export default function TaskCommentSection({
  items,
}: {
  items: CommentResponse[];
}) {
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const isCommentListEmpty = Boolean(items.length === 0);

  return (
    <div className="flex flex-col gap-6">
      <TaskCommentInput />
      <div className="flex flex-col gap-4">
        {items.map((item) =>
          editingCommentId === item.id ? (
            <EditableTaskCommentCard
              key={item.id}
              {...item}
              exitCommentEditMode={() => setEditingCommentId(null)}
            />
          ) : (
            <TaskCommentCard
              key={item.id}
              {...item}
              enterCommentEditMode={() => setEditingCommentId(item.id)}
            />
          )
        )}
      </div>
      {isCommentListEmpty && (
        <div className="text-md-medium py-[120px] text-center text-slate-500">
          <p>아직 작성된 댓글이 없습니다.</p>
        </div>
      )}
    </div>
  );
}
