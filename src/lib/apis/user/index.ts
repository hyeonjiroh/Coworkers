import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import {
  UserBody,
  UserResponse,
  UserGroupResponse,
  UserMembershipResponse,
  UserHistoryResponse,
  ResetPasswordToEmailBody,
  ResetPasswordBody,
  MessageResponse,
} from '@/lib/apis/user/type';

export async function getUser(token: string): Promise<UserResponse | null> {
  return fetcher<undefined, UserResponse>({
    url: `/user`,
    method: 'GET',
    token,
  });
}

export async function patchUser(
  body: UserBody
): Promise<MessageResponse | null> {
  const token = Cookies.get('accessToken');

  const payload = {
    nickname: body.nickname,
    ...(body.image ? { image: body.image } : {}),
  };

  return fetcher<typeof payload, MessageResponse>({
    url: `/user`,
    method: 'PATCH',
    token,
    body: payload,
  });
}

export async function deleteUser(): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/user`,
    method: 'DELETE',
    token,
  });
}

export async function getUserGroups(
  token: string
): Promise<UserGroupResponse[] | null> {
  return fetcher<undefined, UserGroupResponse[]>({
    url: `/user/groups`,
    method: 'GET',
    token,
  });
}

export async function getUserMemberships(
  token: string
): Promise<UserMembershipResponse[] | null> {
  return fetcher<undefined, UserMembershipResponse[]>({
    url: `/user/memberships`,
    method: 'GET',
    token,
  });
}

export async function getUserHistory(
  token: string
): Promise<UserHistoryResponse | null> {
  return fetcher<undefined, UserHistoryResponse>({
    url: `user/history`,
    method: 'GET',
    token,
  });
}

// 비밀번호 재설정 이메일 전송
export async function postResetPasswordToEmail(
  body: ResetPasswordToEmailBody
): Promise<MessageResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<ResetPasswordToEmailBody, MessageResponse>({
    url: `/user/send-reset-password-email`,
    method: 'POST',
    token,
    body,
  });
}

// 이메일로 전달받은 링크에서 비밀번호 초기화
export async function patchResetPassword(
  body: ResetPasswordBody
): Promise<MessageResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<ResetPasswordBody, MessageResponse>({
    url: `/user/reset-password`,
    method: 'PATCH',
    token,
    body,
  });
}

export async function patchPassword(
  body: ResetPasswordBody
): Promise<MessageResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<ResetPasswordBody, MessageResponse>({
    url: `/user/password`,
    method: 'PATCH',
    token,
    body,
  });
}
