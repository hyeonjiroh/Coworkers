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

// 그룹 단일 조회 (GET /groups/:id)
export async function getGroupById({
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

// 그룹 수정 (PATCH /groups/:id)
export async function patchGroupById({
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

// 그룹 삭제 (DELETE /groups/:id)
export async function deleteGroupById(groupId: number): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/groups/${groupId}`,
    method: 'DELETE',
    token,
  });
}

// 그룹 생성 (POST /groups)
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

// 그룹 멤버 단일 조회 (GET /groups/:id/member/:memberUserId)
export async function getGroupMemberById({
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

// 그룹 멤버 삭제 (DELETE /groups/:id/member/:memberUserId)
export async function deleteGroupMemberById({
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

// 초대 링크용 토큰 생성 (GET /groups/:id/invitation)
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

// 초대 수락 (POST /groups/accept-invitation)
export async function postGroupInvitation(
  body: GroupInvitationBody
): Promise<GroupInvitationResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<GroupInvitationBody, GroupInvitationResponse>({
    url: `/groups/accept-invitation`,
    method: 'POST',
    token,
    body,
  });
}

// 그룹 멤버 추가 (POST /groups/:id/member)
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

// 그룹 할 일 조회 (GET /groups/:id/tasks?date=YYYY-MM-DDT00:00:00Z)
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
