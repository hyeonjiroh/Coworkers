import Cookies from 'js-cookie';

import {
  GetGroupResponse,
  PostGroupBody,
  PostGroupResponse,
} from '@/lib/api/group/type';

import fetcher from '@/lib/fetcher';

export async function getGroupsById({
  groupId,
  token,
}: {
  groupId: number;
  token: string;
}): Promise<GetGroupResponse | null> {
  return fetcher<undefined, GetGroupResponse>({
    url: `/groups/${groupId}`,
    method: 'GET',
    token,
  });
}

export async function deleteGroupsById(groupId: number): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/groups/${groupId}`,
    method: 'DELETE',
    token,
  });
}

export async function postGroups(
  body: PostGroupBody
): Promise<PostGroupResponse | null> {
  const token = Cookies.get('accessToken');

  const payload = {
    name: body.name,
    ...(body.image ? { image: body.image } : {}),
  };

  return fetcher<typeof payload, PostGroupResponse>({
    url: '/groups',
    method: 'POST',
    token,
    body: payload,
  });
}
