import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import {
  GroupBody,
  GroupInvitationBody,
  GroupInvitationResponse,
  GroupMemberBody,
  GroupMemberResponse,
  GroupResponse,
} from '@/lib/apis/group/type';
import { TaskResponse } from '@/lib/apis/task/type';

export async function getGroup({
  groupId,
  token,
}: {
  groupId: number;
  token: string;
}): Promise<GroupResponse | null> {
  return fetcher<undefined, GroupResponse>({
    url: `/groups/${groupId}`,
    method: 'GET',
    token,
  });
}

export async function patchGroup({
  groupId,
  body,
}: {
  groupId: number;
  body: GroupBody;
}): Promise<GroupResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<GroupBody, GroupResponse>({
    url: `/groups/${groupId}`,
    method: 'PATCH',
    token,
    body,
  });
}

export async function deleteGroup(groupId: number): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/groups/${groupId}`,
    method: 'DELETE',
    token,
  });
}

export async function postGroup(
  body: GroupBody
): Promise<GroupResponse | null> {
  const token = Cookies.get('accessToken');

  const payload = {
    name: body.name,
    ...(body.image ? { image: body.image } : {}),
  };

  return fetcher<typeof payload, GroupResponse>({
    url: `/groups`,
    method: 'POST',
    token,
    body: payload,
  });
}

export async function getGroupMember({
  groupId,
  memberId,
  token,
}: {
  groupId: number;
  memberId: number;
  token: string;
}): Promise<GroupMemberResponse | null> {
  return fetcher<undefined, GroupMemberResponse>({
    url: `/groups/${groupId}/member/${memberId}`,
    method: 'GET',
    token,
  });
}

export async function deleteGroupMember({
  groupId,
  memberId,
}: {
  groupId: number;
  memberId: number;
}): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/groups/${groupId}/member/${memberId}`,
    method: 'DELETE',
    token,
  });
}

// 초대 링크용 토큰 생성
export async function getGroupInvitation({
  groupId,
  token,
}: {
  groupId: number;
  token: string;
}): Promise<string | null> {
  return fetcher<undefined, string>({
    url: `/groups/${groupId}/invitation`,
    method: 'GET',
    token,
  });
}

// 초대 수락
export async function postGroupInvitation({
  body,
}: {
  body: GroupInvitationBody;
}): Promise<GroupInvitationResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<GroupInvitationBody, GroupInvitationResponse>({
    url: `/groups/accept-invitation`,
    method: 'POST',
    token,
    body,
  });
}

export async function postGroupMember({
  groupId,
  body,
}: {
  groupId: number;
  body: GroupMemberBody;
}): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<GroupMemberBody, null>({
    url: `/groups/${groupId}/member`,
    method: 'POST',
    token,
    body,
  });
}

// 특정 날짜의 할 일 리스트
export async function getGroupTasks({
  groupId,
  date,
  token,
}: {
  groupId: number;
  date: string;
  token: string;
}): Promise<TaskResponse[] | null> {
  return fetcher<undefined, TaskResponse[]>({
    url: `/groups/${groupId}/tasks?date=${date}`,
    method: 'GET',
    token,
  });
}
