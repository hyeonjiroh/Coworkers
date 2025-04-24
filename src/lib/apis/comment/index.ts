import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import { CommentBody, CommentResponse } from '@/lib/apis/comment/type';

export async function getComment({
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

export async function postComment({
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

export async function patchComment({
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

export async function deleteComment({
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
