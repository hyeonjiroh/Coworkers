import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import { CommentBody, CommentResponse } from '@/lib/apis/comment/type';

// 특정 할 일의 댓글 목록 조회 (GET /tasks/:taskId/comments)
export async function getCommentsByTaskId({
  taskId,
  token,
}: {
  taskId: number;
  token: string;
}): Promise<CommentResponse[] | null> {
  return fetcher<undefined, CommentResponse[]>({
    url: `/tasks/${taskId}/comments`,
    method: 'GET',
    token,
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
  const token = Cookies.get('accessToken');
  return fetcher<CommentBody, CommentResponse>({
    url: `/tasks/${taskId}/comments`,
    method: 'POST',
    token,
    body,
  });
}

// 특정 댓글 수정 (PATCH /tasks/:taskId/comments/:commentId)
export async function patchTaskComment({
  taskId,
  commentId,
  body,
}: {
  taskId: number;
  commentId: number;
  body: CommentBody;
}): Promise<CommentResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<CommentBody, CommentResponse>({
    url: `/tasks/${taskId}/comments/${commentId}`,
    method: 'PATCH',
    token,
    body,
  });
}

// 특정 댓글 삭제 (DELETE /tasks/:taskId/comments/:commentId)
export async function deleteTaskComment({
  taskId,
  commentId,
}: {
  taskId: number;
  commentId: number;
}): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/tasks/${taskId}/comments/${commentId}`,
    method: 'DELETE',
    token,
  });
}
