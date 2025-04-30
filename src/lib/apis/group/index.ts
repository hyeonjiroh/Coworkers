import serverFetcher from '@/lib/server/fetcher.server';
import clientFetcher from '@/lib/client/fetcher.client';
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
}: {
  groupId: number;
}): Promise<GroupResponse | null> {
  return serverFetcher<undefined, GroupResponse>({
    url: `/groups/${groupId}`,
    method: 'GET',
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
  return clientFetcher<GroupBody, GroupResponse>({
    url: `/groups/${groupId}`,
    method: 'PATCH',
    body,
  });
}

// 그룹 삭제 (DELETE /groups/:id)
export async function deleteGroupById(groupId: number): Promise<null> {
  return clientFetcher<undefined, null>({
    url: `/groups/${groupId}`,
    method: 'DELETE',
  });
}

// 그룹 생성 (POST /groups)
export async function postGroup(
  body: GroupBody
): Promise<GroupResponse | null> {
  const payload = {
    name: body.name,
    ...(body.image ? { image: body.image } : {}),
  };

  return clientFetcher<typeof payload, GroupResponse>({
    url: `/groups`,
    method: 'POST',
    body: payload,
  });
}

// 그룹 멤버 단일 조회 (GET /groups/:id/member/:memberUserId)
export async function getGroupMemberById({
  groupId,
  memberId,
}: {
  groupId: number;
  memberId: number;
}): Promise<GroupMemberResponse | null> {
  return serverFetcher<undefined, GroupMemberResponse>({
    url: `/groups/${groupId}/member/${memberId}`,
    method: 'GET',
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
  return clientFetcher<undefined, null>({
    url: `/groups/${groupId}/member/${memberId}`,
    method: 'DELETE',
  });
}

// 초대 링크용 토큰 생성 (GET /groups/:id/invitation)
export async function getGroupInvitation({
  groupId,
}: {
  groupId: number;
}): Promise<string | null> {
  return serverFetcher<undefined, string>({
    url: `/groups/${groupId}/invitation`,
    method: 'GET',
  });
}

// 초대 수락 (POST /groups/accept-invitation)
export async function postGroupInvitation(
  body: GroupInvitationBody
): Promise<GroupInvitationResponse | null> {
  return clientFetcher<GroupInvitationBody, GroupInvitationResponse>({
    url: `/groups/accept-invitation`,
    method: 'POST',
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
  return clientFetcher<GroupMemberBody, null>({
    url: `/groups/${groupId}/member`,
    method: 'POST',
    body,
  });
}

// 그룹 할 일 조회 (GET /groups/:id/tasks?date=YYYY-MM-DDT00:00:00Z)
export async function getGroupTasks({
  groupId,
  date,
}: {
  groupId: number;
  date: string;
}): Promise<TaskResponse[] | null> {
  return serverFetcher<undefined, TaskResponse[]>({
    url: `/groups/${groupId}/tasks?date=${date}`,
    method: 'GET',
  });
}
