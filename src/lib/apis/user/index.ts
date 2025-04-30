import serverFetcher from '@/lib/server/fetcher.server';
import clientFetcher from '@/lib/client/fetcher.client';
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
export async function getUser(): Promise<UserResponse | null> {
  return serverFetcher<undefined, UserResponse>({
    url: `/user`,
    method: 'GET',
  });
}

// 회원 정보 수정 (PATCH /user)
export async function patchUser(
  body: UserBody
): Promise<MessageResponse | null> {
  const payload = {
    nickname: body.nickname,
    ...(body.image ? { image: body.image } : {}),
  };

  return clientFetcher<typeof payload, MessageResponse>({
    url: `/user`,
    method: 'PATCH',
    body: payload,
  });
}

// 회원 탈퇴 (DELETE /user)
export async function deleteUser(): Promise<null> {
  return clientFetcher<undefined, null>({
    url: `/user`,
    method: 'DELETE',
  });
}

// 사용자 소속 그룹 조회 (GET /user/groups)
export async function getUserGroups(): Promise<UserGroupResponse[] | null> {
  return serverFetcher<undefined, UserGroupResponse[]>({
    url: `/user/groups`,
    method: 'GET',
  });
}

// 사용자 멤버십 정보 조회 (GET /user/memberships)
export async function getUserMemberships(): Promise<
  UserMembershipResponse[] | null
> {
  return serverFetcher<undefined, UserMembershipResponse[]>({
    url: `/user/memberships`,
    method: 'GET',
  });
}

// 사용자 완료한 작업 조회 (GET /user/history)
export async function getUserHistory(): Promise<UserHistoryResponse | null> {
  return serverFetcher<undefined, UserHistoryResponse>({
    url: `user/history`,
    method: 'GET',
  });
}

// 비밀번호 재설정 이메일 전송 (POST /user/send-reset-password-email)
export async function postResetPasswordToEmail(
  body: ResetPasswordToEmailBody
): Promise<MessageResponse | null> {
  return clientFetcher<ResetPasswordToEmailBody, MessageResponse>({
    url: `/user/send-reset-password-email`,
    method: 'POST',
    body,
  });
}

// 이메일로 전달받은 링크에서 비밀번호 초기화 (PATCH /user/reset-password)
export async function patchResetPassword(
  body: ResetPasswordBody
): Promise<MessageResponse | null> {
  return clientFetcher<ResetPasswordBody, MessageResponse>({
    url: `/user/reset-password`,
    method: 'PATCH',
    body,
  });
}

// 비밀번호 변경 (PATCH /user/password)
export async function patchPassword(
  body: ResetPasswordBody
): Promise<MessageResponse | null> {
  return clientFetcher<ResetPasswordBody, MessageResponse>({
    url: `/user/password`,
    method: 'PATCH',
    body,
  });
}
