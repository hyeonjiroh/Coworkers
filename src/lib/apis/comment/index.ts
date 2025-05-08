import serverFetcher from '@/lib/server/fetcher.server';
import { CommentBody, CommentResponse } from '@/lib/apis/comment/type';

// 특정 할 일의 댓글 목록 조회 (GET /tasks/:taskId/comments)
export async function getCommentsByTaskId({
  taskId,
  tag,
}: {
  taskId: number;
  tag?: string[];
}): Promise<CommentResponse[] | null> {
  return serverFetcher<undefined, CommentResponse[]>({
    url: `/tasks/${taskId}/comments`,
    method: 'GET',
    tag,
  });
}

// 특정 할 일에 댓글 작성 (POST /tasks/:taskId/comments)
export async function postTaskComment({
  taskId,
  body,
  tag,
}: {
  taskId: number;
  body: CommentBody;
  tag?: string[];
}): Promise<CommentResponse | null> {
  return serverFetcher<CommentBody, CommentResponse>({
    url: `/tasks/${taskId}/comments`,
    method: 'POST',
    body,
    tag,
  });
}

// 특정 댓글 수정 (PATCH /tasks/:taskId/comments/:commentId)
export async function patchTaskComment({
  commentId,
  body,
  tag,
}: {
  commentId: number;
  body: CommentBody;
  tag?: string[];
}): Promise<CommentResponse | null> {
  return serverFetcher<CommentBody, CommentResponse>({
    url: `/tasks/{taskId}/comments/${commentId}`,
    method: 'PATCH',
    body,
    tag,
  });
}

// 특정 댓글 삭제 (DELETE /tasks/:taskId/comments/:commentId)
export async function deleteTaskComment({
  commentId,
  tag,
}: {
  commentId: number;
  tag?: string[];
}): Promise<null> {
  return serverFetcher<undefined, null>({
    url: `/tasks/{taskId}/comments/${commentId}`,
    method: 'DELETE',
    tag,
  });
}
