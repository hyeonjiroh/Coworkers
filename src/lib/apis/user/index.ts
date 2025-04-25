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

// 회원 정보 조회 (GET /user)
export async function getUser(token: string): Promise<UserResponse | null> {
  return fetcher<undefined, UserResponse>({
    url: `/user`,
    method: 'GET',
    token,
  });
}

// 회원 정보 수정 (PATCH /user)
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

// 회원 탈퇴 (DELETE /user)
export async function deleteUser(): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/user`,
    method: 'DELETE',
    token,
  });
}

// 사용자 소속 그룹 조회 (GET /user/groups)
export async function getUserGroups(
  token: string
): Promise<UserGroupResponse[] | null> {
  return fetcher<undefined, UserGroupResponse[]>({
    url: `/user/groups`,
    method: 'GET',
    token,
  });
}

// 사용자 멤버십 정보 조회 (GET /user/memberships)
export async function getUserMemberships(
  token: string
): Promise<UserMembershipResponse[] | null> {
  return fetcher<undefined, UserMembershipResponse[]>({
    url: `/user/memberships`,
    method: 'GET',
    token,
  });
}

// 사용자 완료한 작업 조회 (GET /user/history)
export async function getUserHistory(
  token: string
): Promise<UserHistoryResponse | null> {
  return fetcher<undefined, UserHistoryResponse>({
    url: `user/history`,
    method: 'GET',
    token,
  });
}

// 비밀번호 재설정 이메일 전송 (POST /user/send-reset-password-email)
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

// 이메일로 전달받은 링크에서 비밀번호 초기화 (PATCH /user/reset-password)
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

// 비밀번호 변경 (PATCH /user/password)
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
