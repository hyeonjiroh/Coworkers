import serverFetcher from '@/lib/server/fetcher.server';
import clientFetcher from '@/lib/client/fetcher.client';
import { CommentBody, CommentResponse } from '@/lib/apis/comment/type';

// 특정 할 일의 댓글 목록 조회 (GET /tasks/:taskId/comments)
export async function getCommentsByTaskId({
  taskId,
}: {
  taskId: number;
}): Promise<CommentResponse[] | null> {
  return serverFetcher<undefined, CommentResponse[]>({
    url: `/tasks/${taskId}/comments`,
    method: 'GET',
  });
}

// 특정 할 일에 댓글 작성 (POST /tasks/:taskId/comments)
export async function postTaskComment({
  taskId,
  body,
}: {
  taskId: number;
  body: CommentBody;
}): Promise<CommentResponse | null> {
  return clientFetcher<CommentBody, CommentResponse>({
    url: `/tasks/${taskId}/comments`,
    method: 'POST',
    body,
  });
}

// 특정 댓글 수정 (PATCH /tasks/:taskId/comments/:commentId)
export async function patchTaskComment({
  commentId,
  body,
}: {
  commentId: number;
  body: CommentBody;
}): Promise<CommentResponse | null> {
  return clientFetcher<CommentBody, CommentResponse>({
    url: `/tasks/{taskId}/comments/${commentId}`,
    method: 'PATCH',
    body,
  });
}

// 특정 댓글 삭제 (DELETE /tasks/:taskId/comments/:commentId)
export async function deleteTaskComment({
  commentId,
}: {
  commentId: number;
}): Promise<null> {
  return clientFetcher<undefined, null>({
    url: `/tasks/{taskId}/comments/${commentId}`,
    method: 'DELETE',
  });
}
