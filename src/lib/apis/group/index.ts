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
  tag,
}: {
  groupId: number;
  tag?: string[];
}): Promise<GroupResponse | null> {
  return serverFetcher<undefined, GroupResponse>({
    url: `/groups/${groupId}`,
    method: 'GET',
    tag,
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
export async function deleteGroupById({
  groupId,
}: {
  groupId: number;
}): Promise<null> {
  return clientFetcher<undefined, null>({
    url: `/groups/${groupId}`,
    method: 'DELETE',
  });
}

// 그룹 생성 (POST /groups)
export async function postGroup({
  body,
}: {
  body: GroupBody;
}): Promise<GroupResponse | null> {
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
  tag,
}: {
  groupId: number;
  memberId: number;
  tag?: string[];
}): Promise<GroupMemberResponse | null> {
  return serverFetcher<undefined, GroupMemberResponse>({
    url: `/groups/${groupId}/member/${memberId}`,
    method: 'GET',
    tag,
  });
}

// 그룹 멤버 삭제 (DELETE /groups/:id/member/:memberUserId)
export async function deleteGroupMemberById({
  groupId,
  memberId,
  tag,
}: {
  groupId: number;
  memberId: number;
  tag?: string[];
}): Promise<null> {
  return serverFetcher<undefined, null>({
    url: `/groups/${groupId}/member/${memberId}`,
    method: 'DELETE',
    tag,
  });
}

// 초대 링크용 토큰 생성 (GET /groups/:id/invitation)
export async function getGroupInvitation({
  groupId,
  tag,
}: {
  groupId: number;
  tag?: string[];
}): Promise<string | null> {
  return serverFetcher<undefined, string>({
    url: `/groups/${groupId}/invitation`,
    method: 'GET',
    tag,
  });
}

// 초대 수락 (POST /groups/accept-invitation)
export async function postGroupInvitation({
  body,
}: {
  body: GroupInvitationBody;
}): Promise<GroupInvitationResponse | null> {
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
  tag,
}: {
  groupId: number;
  date: string;
  tag?: string[];
}): Promise<TaskResponse[] | null> {
  return serverFetcher<undefined, TaskResponse[]>({
    url: `/groups/${groupId}/tasks?date=${date}`,
    method: 'GET',
    tag,
  });
}
